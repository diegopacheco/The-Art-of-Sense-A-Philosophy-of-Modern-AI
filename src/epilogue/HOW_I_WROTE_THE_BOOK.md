# How I wrote this book?

I blog [since](https://diego-pacheco.blogspot.com/2007/03/boas-vindas-primeiro-post.html) `2007`, that is: <b><span id="years-blogging"></span></b>.
Every page in this book has one or multiple links to blog posts I did in the past.

I wrote this book in a very different way compared with my 3 previous books. My 3 previous books were written in a formal way. This one was written in a very different way. Let's explain the "formal process" and how it usually worked for me:
* You need to write a proposal, the proposal gets debated and approved, then you write.
* Formal books have length requirements, usually 300 pages.
* Formal books, once approved, are waterfall and have several phases.
* Once you deliver a chapter, there is an English reviewer.
* After the English reviewer, there is the technical reviewer.
* After that, there is copy-writing, indexing, layouting, and finally printing.
* The traditional process takes from 7 to 12 months.
* I wrote books alone and with other people; the more people you have, the more coordination you need and the longer it takes; more things can go wrong. It's literally no different than a project.

I want a different experience; I did several things differently here. I'm not saying I would never do traditional books again, but for sure it's different; there are some things here I like a lot, for instance:
 * Because I used `mdbook`, the book is written with a tool in Rust which is markdown based.
 * Mdbook has 3 killer features for me:
 * It has a built-in search engine, and a very good one.
 * It provides a direct link to all pages of the book; every page has a unique URL.
 * It has a built-in way to generate code snippets with syntax highlighting, videos, and themes.
 * The book is hosted on git. Meaning I have version control over all the changes of the book; want to see what I did differently? just use git.
 * If I want to say something different, on the traditional book I need to write a new book and people need to buy it to read it; here I just do a `git push` and it's live, because I have a workflow with GitHub Actions to publish the book on a GitHub Pages site.
 * It's also a way for me to give back for free.

## What tools did I use?

I basically use [VSCode](https://code.visualstudio.com/) to write the book. I used [Github Copilot](https://github.com/features/copilot) and [Claude Code](https://github.com/anthropics/claude-code).

I did not use AI to generate the entire book. The book is mine; all content I wrote, but I used AI to generate the following content:
* Index
* Glossary
* References
* Spell check and proofreading my English (fix typos and fix grammar issues, never to write whole paragraphs).

I used Claude Code [custom commands](https://github.com/diegopacheco/decks/blob/main/tech-notes/claude-code.md#3-create-custom-commands) to do all these tasks. I created a `book-all` custom command that automated all those workflows:

book-all.md
```markdown
## Perform several Tasks to publish my book
- Read all markdown files
- Perform the following tasks

## Task 1 - # Create or Update my Glossary
- My glossary is on a GLOSSARY.md
- Make sure my glossary is up to date

## Task 2 - # Create or Update my References
- My references are in REFERENCES.md
- Make sure my external references/links are up to date

## Task 3 - # Create or update my book index
- Index is on a file INDEX.MD
- Make sure my index is up to date

## Task 4 - # Create or update book CHANGELOG.md
- Read commits from git history
- Make sure the changelog has meaning
- Only look for markdown files, ignore *.html.

## Task 5 - # Fix my english
- Fix all my english issues
- Fix my typos
- Don't touch the HTML files only the markdown files
- Only fix english or grammar mistake, don't change my words or writing style
- Make sure you don't break anything, make sure you don't lose content

## Task 6 - # Make sure you did not lose content
- You cannot lose content
- Make sure you did not break links
- Make sure all content is there
- Make sure you did not delete anything wrongly
```

Running this custom command uses on avg ~70k tokens. So I use AI for the boring and repetitive tasks, not to write the book itself. When I run out of tokens on Claude Code, I would fall back to GitHub Copilot. For this book, I tried [copilot cli](https://github.com/features/copilot/cli) as a fallback to Claude Code when I ran out of tokens. It mostly worked but created some bugs, like making the pages flat and losing the folder structure. So I had to fix that manually.

## CI/CD

This book was written with CI/CD in mind from day one. I have a script called `bump-version.sh` that bumps the version of the book in a file at the root called "VERSION". When I released the book, it had `~160 pages` on version `1.0.0`; it took me `13 days` to write them. More to come.

This is a killer feature because I can keep releasing new content in a very lean/agile way, directly to you the reader.

## Did you like my work? Did it help you?

If you like my work, you can help me by buying one of my other books here:
* [Continuous Modernization](https://www.amazon.com/dp/9365893100/ref=mes-dp?_encoding=UTF8&pd_rd_w=JpyYV&content-id=amzn1.sym.7d2923e8-7496-46a5-862d-8ef28e908025&pf_rd_p=7d2923e8-7496-46a5-862d-8ef28e908025&pf_rd_r=K6XYEHZZ76RWDSAXAY5X&pd_rd_wg=RH04x&pd_rd_r=f230b2e4-c342-429e-a362-c856e4c2362a)
* [Principles of Software Architecture Modernization](https://www.amazon.com/Principles-Software-Architecture-Modernization-microservices/dp/9355519532/ref=sr_1_1?crid=7U3H2IE5U7Y4&dib=eyJ2IjoiMSJ9.ebHg7EIiJ3GThIg8Dwf4PelC70iUIbHPKv7_7zk8vrk8K2FB4zlrUQyNZwKAHPO46cAYR5z2-KyqnXqNz3Ee2lmU-aGR7NLhq7jko2UihHIl-taoJ6i_hkMjcc12ZF3pOmB9lFrvbsGgbDagq1Vzqg.oz7TxYpSBxBZjVjkuIPDZM7Wxx_XMRU0Uj7jo9Rq_BI&dib_tag=se&keywords=principles+of+software+architecture+modernization&qid=1741069169&sprefix=Principles+of+software+a%2Caps%2C190&sr=8-1)
* [Building Applications with Scala](https://books.apple.com/us/book/building-applications-with-scala/id1113861297)

You can also help me by sharing this book in social media on X, LinkedIn, Facebook, Reddit, Hacker News, or any other place you like.