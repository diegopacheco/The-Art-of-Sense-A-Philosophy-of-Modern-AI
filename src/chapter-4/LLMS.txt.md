# llms.txt and llms-full.txt

[llms.txt](https://llmstxt.org/) and llms-full.txt are text files (usually with markdown formatting) that contain information about various large language models (LLMs). Such an idea is not new; we had other indexing-related files like `robots.txt` or `sitemap.xml`. This is useful for LLM agents when reading websites more effectively.

I asked Claude Code about it:

Prompt:
```
what is llms.txt and llms-full.txt?
```
I got:
```
llms.txt

A concise navigation guide for AI models containing:
- Project/site name (required H1 header)
- Short summary in blockquote format
- Structured hierarchy of important content
- Links to markdown files with detailed information
- Suggestions for essential vs optional content

Uses Markdown format specifically because LLMs read it well.

llms-full.txt

A comprehensive single file containing all documentation content directly, eliminating the need for navigation across multiple files.

Purpose

These files live at the root (/llms.txt and /llms-full.txt) to help LLMs:
- Quickly understand what a project/site is about
- Navigate to relevant information efficiently
- Access complete documentation in one place
```

Examples across the internet:
* [Claude](https://docs.claude.com/llms-full.txt)
* [OpenAI](https://cdn.openai.com/API/docs/txt/llms.txt)
* [LangGraph](https://langchain-ai.github.io/langgraph/llms-txt-overview/)
