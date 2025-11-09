#!/bin/bash

BASE_DIR="/Users/diegopacheco/git/diegopacheco/The-Art-of-Sense-A-Philosophy-of-Modern-AI"
cd "$BASE_DIR"

TOTAL_FILES=0
BROKEN_LINKS=0
MISSING_REFS=0
BROKEN_URLS=0

echo "=== Book Integrity Verification Report ==="
echo ""
echo "Scanning all markdown files..."
echo ""

BROKEN_LINKS_FILE=$(mktemp)
MISSING_FILES=$(mktemp)

while IFS= read -r file; do
    TOTAL_FILES=$((TOTAL_FILES + 1))

    grep -oE '\]\([^)]+\)' "$file" | sed 's/\](\(.*\))/\1/' | while read -r link; do
        if [[ "$link" =~ ^https?:// ]]; then
            continue
        fi

        if [[ "$link" =~ ^# ]]; then
            continue
        fi

        dir=$(dirname "$file")

        if [[ "$link" =~ ^\.\. ]]; then
            target="$dir/$link"
        elif [[ "$link" =~ ^\. ]]; then
            target="$dir/$link"
        else
            target="$dir/$link"
        fi

        resolved=$(cd "$dir" && realpath -m "$link" 2>/dev/null || echo "$target")

        if [ ! -f "$resolved" ]; then
            echo "BROKEN: $file -> $link (resolved: $resolved)" >> "$BROKEN_LINKS_FILE"
        fi
    done
done < <(find "$BASE_DIR" -name "*.md" -type f)

if [ -s "$BROKEN_LINKS_FILE" ]; then
    BROKEN_LINKS=$(wc -l < "$BROKEN_LINKS_FILE")
    echo "=== BROKEN LINKS FOUND ==="
    cat "$BROKEN_LINKS_FILE"
    echo ""
fi

echo "=== Checking files referenced in SUMMARY.md ==="
while IFS= read -r link; do
    if [[ "$link" =~ ^https?:// ]] || [[ "$link" =~ ^# ]]; then
        continue
    fi

    target="$BASE_DIR/src/$link"
    if [ ! -f "$target" ]; then
        echo "MISSING: SUMMARY.md references $link but file not found at $target" >> "$MISSING_FILES"
        MISSING_REFS=$((MISSING_REFS + 1))
    fi
done < <(grep -oE '\]\([^)]+\)' "$BASE_DIR/src/SUMMARY.md" 2>/dev/null | sed 's/\](\(.*\))/\1/')

if [ -s "$MISSING_FILES" ]; then
    echo "=== MISSING FILES IN SUMMARY.md ==="
    cat "$MISSING_FILES"
    echo ""
fi

echo "=== SUMMARY ==="
echo "Total files checked: $TOTAL_FILES"
echo "Broken internal links: $BROKEN_LINKS"
echo "Missing cross-references: $MISSING_REFS"

if [ $BROKEN_LINKS -eq 0 ] && [ $MISSING_REFS -eq 0 ]; then
    echo "Status: PASS"
    exit 0
else
    echo "Status: FAIL"
    exit 1
fi

rm -f "$BROKEN_LINKS_FILE" "$MISSING_FILES"
