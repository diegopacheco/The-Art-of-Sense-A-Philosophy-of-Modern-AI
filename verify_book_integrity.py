#!/usr/bin/env python3

import os
import re
from pathlib import Path
from urllib.parse import urlparse

BASE_DIR = "/Users/diegopacheco/git/diegopacheco/The-Art-of-Sense-A-Philosophy-of-Modern-AI"

def extract_links(content):
    pattern = r'\]\(([^)]+)\)'
    return re.findall(pattern, content)

def is_url(link):
    return link.startswith('http://') or link.startswith('https://')

def is_anchor(link):
    return link.startswith('#')

def resolve_link(source_file, link):
    if is_url(link) or is_anchor(link):
        return None

    source_dir = os.path.dirname(source_file)

    target = os.path.join(source_dir, link)
    target = os.path.normpath(target)

    return target

def main():
    total_files = 0
    broken_links = []
    missing_refs = []
    all_urls = []

    print("=== Book Integrity Verification Report ===")
    print()

    md_files = list(Path(BASE_DIR).rglob("*.md"))
    total_files = len(md_files)

    print(f"Scanning {total_files} markdown files...")
    print()

    for md_file in md_files:
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()
            links = extract_links(content)

            for link in links:
                if is_url(link):
                    all_urls.append((str(md_file), link))
                    continue

                if is_anchor(link):
                    continue

                resolved = resolve_link(str(md_file), link)
                if resolved and not os.path.exists(resolved):
                    broken_links.append({
                        'source': str(md_file),
                        'link': link,
                        'resolved': resolved
                    })

    summary_file = os.path.join(BASE_DIR, "src", "SUMMARY.md")
    if os.path.exists(summary_file):
        with open(summary_file, 'r', encoding='utf-8') as f:
            content = f.read()
            links = extract_links(content)

            for link in links:
                if is_url(link) or is_anchor(link):
                    continue

                target = os.path.join(BASE_DIR, "src", link)
                target = os.path.normpath(target)

                if not os.path.exists(target):
                    missing_refs.append({
                        'link': link,
                        'expected': target
                    })

    index_file = os.path.join(BASE_DIR, "src", "epilogue", "BOOK_INDEX.md")
    if os.path.exists(index_file):
        with open(index_file, 'r', encoding='utf-8') as f:
            content = f.read()
            links = extract_links(content)

            for link in links:
                if is_url(link) or is_anchor(link):
                    continue

                source_dir = os.path.dirname(index_file)
                target = os.path.join(source_dir, link)
                target = os.path.normpath(target)

                if not os.path.exists(target):
                    broken_links.append({
                        'source': index_file,
                        'link': link,
                        'resolved': target
                    })

    if broken_links:
        print("=== BROKEN INTERNAL LINKS ===")
        for broken in broken_links:
            print(f"BROKEN: {broken['source']}")
            print(f"  Link: {broken['link']}")
            print(f"  Expected: {broken['resolved']}")
            print()

    if missing_refs:
        print("=== MISSING FILES REFERENCED IN SUMMARY.md ===")
        for missing in missing_refs:
            print(f"MISSING: {missing['link']}")
            print(f"  Expected: {missing['expected']}")
            print()

    print("=== SUMMARY ===")
    print(f"Total files checked: {total_files}")
    print(f"Broken internal links: {len(broken_links)}")
    print(f"Missing cross-references: {len(missing_refs)}")
    print(f"Total URLs found: {len(all_urls)}")
    print()

    if len(broken_links) == 0 and len(missing_refs) == 0:
        print("Overall Status: PASS")
        return 0
    else:
        print("Overall Status: FAIL")
        return 1

if __name__ == "__main__":
    exit(main())
