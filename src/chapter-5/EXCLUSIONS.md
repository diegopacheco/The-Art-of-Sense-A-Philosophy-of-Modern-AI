# Exclusions

If you don't want claude to read some files, there is a way to tell claude code to ignore them. You might want to do this for a couple of reasons:
* 1. You want to save tokens: Tokens are money, tokens are expensive, you don't want to waste time and money on claude reading trash.
* 2. You have sensitive information: Maybe you have some files that contain sensitive information that you don't want claude to read. Like PII, user data, credentials, etc.
* 3. You have large files that are not useful: Maybe you have some large files that are not useful for claude to read. Like logs, binaries, etc. 

To make claude ignore these files you need to add an entry in:
* Global Exclusions: `~/.claude/settings.json`
* Project Exclusions: `.claude/settings.json`

And add an entry like this:
```json
{
 "permissions": {
 "deny": [
 "Read(./node_modules/**)",
 "Read(./vendor/**)",
 "Read(./venv/**)",
 "Read(./dist/**)",
 "Read(./build/**)",
 "Read(./out/**)",
 "Read(./**/*.min.js)",
 "Read(./**/*.bundle.js)",
 "Read(./**/*.map)",
 "Read(./package-lock.json)",
 "Read(./yarn.lock)",
 "Read(./pnpm-lock.yaml)",
 "Read(./.env)",
 "Read(./.env.*)",
 "Read(./**/*.key)",
 "Read(./**/*.pem)",
 "Read(./credentials.json)",
 "Read(./coverage/**)",
 "Read(./.nyc_output/**)",
 "Read(./.vscode/**)",
 "Read(./.idea/**)",
 "Read(./**/*.log)",
 "Read(./data/**)"
 ]
 }
}
```

Claude can still read these files if you instruct it, otherwise it will ignore them.

I wrote this script:

claude-ignore.sh
```

#!/bin/bash

CLAUDEIGNORE=".claudeignore"
GITIGNORE=".gitignore"
SETTINGS_FILE=".claude/settings.json"
ADDED_IGNORE=()
ADDED_DENY=()

mkdir -p .claude

if [ -f "$GITIGNORE" ]; then
 while IFS= read -r line || [ -n "$line" ]; do
 if [ -n "$line" ] && [[ ! "$line" =~ ^#.*$ ]]; then
 if ! grep -Fxq "$line" "$CLAUDEIGNORE" 2>/dev/null; then
    echo "$line" >> "$CLAUDEIGNORE"
    ADDED_IGNORE+=("$line")
 fi
 fi
 done < "$GITIGNORE"
fi

SETTINGS_ENTRY=".claude/settings.json"
if ! grep -Fxq "$SETTINGS_ENTRY" "$CLAUDEIGNORE" 2>/dev/null; then
 echo "$SETTINGS_ENTRY" >> "$CLAUDEIGNORE"
 ADDED_IGNORE+=("$SETTINGS_ENTRY")
fi

if [ ! -f "$SETTINGS_FILE" ]; then
 echo '{"writePermissions":{"deny":[]}}' > "$SETTINGS_FILE"
fi

TEMP_FILE=$(mktemp)
if [ -f "$GITIGNORE" ]; then
 while IFS= read -r line || [ -n "$line" ]; do
 if [ -n "$line" ] && [[ ! "$line" =~ ^#.*$ ]]; then
 if ! grep -q "\"$line\"" "$SETTINGS_FILE" 2>/dev/null; then
    ADDED_DENY+=("$line")
 fi
 fi
 done < "$GITIGNORE"
fi

if [ ${#ADDED_DENY[@]} -gt 0 ]; then
 python3 -c "
import json
import sys

with open('$SETTINGS_FILE', 'r') as f:
 data = json.load(f)

if 'writePermissions' not in data:
 data['writePermissions'] = {}
if 'deny' not in data['writePermissions']:
 data['writePermissions']['deny'] = []

deny_list = data['writePermissions']['deny']
new_entries = [$(printf '"%s",' "${ADDED_DENY[@]}" | sed 's/,$//')]
for entry in new_entries:
 if entry not in deny_list:
    deny_list.append(entry)

with open('$SETTINGS_FILE', 'w') as f:
 json.dump(data, f, indent=2)
"
fi

echo "Added entries to .claudeignore:"
for entry in "${ADDED_IGNORE[@]}"; do
 echo " - $entry"
done

if [ ${#ADDED_IGNORE[@]} -eq 0 ]; then
 echo " (no new entries added)"
fi

echo ""
echo "Added write permission denies to .claude/settings.json:"
for entry in "${ADDED_DENY[@]}"; do
 echo " - $entry"
done

if [ ${#ADDED_DENY[@]} -eq 0 ]; then
 echo " (no new denies added)"
fi
```

Where it will turn your .gitignore into claude exclusions. You can run it whenever you want to sync your .gitignore with claude exclusions.