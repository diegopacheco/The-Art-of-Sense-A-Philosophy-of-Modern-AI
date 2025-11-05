# Prompt Advice

`Be Explicit in Prompts`

Also highly recommended for Claude Code prompts:
* Claude Code follows instructions literally
* "Fix the bug" vs "Fix the authentication timeout in login.ts:45"
* Reference specific files, functions, line numbers when possible
* Use @filename to reference files in slash commands
* Break large tasks into steps
* Claude tracks context across the session
* Easier to review and iterate on smaller changes

Here is Anthropic's official advice on prompt writing for [Claude Code](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices)