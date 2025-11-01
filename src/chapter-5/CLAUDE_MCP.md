# MCP and Claude Code

Anthropic created MCP to standardize how context is provided to LLMs. Claude Code as a AI coding agentleverages MCP to enhance its capabilities.However people think that claude code can only do things using MCP, which is not true. Claude Code has inside-of-the-box tools, that can do several things. In other words Claude can do a lot without MCP.

I asked claude what tools he has inside of the box and this is what I got:

Prompt:
```
Tell me chat tools Claude Code has inside-of-the-box. I dont want know about MCP(external nor remote).
```
Result:
```
⏺ Claude Code has these built-in chat/interaction tools:

Task Management:
- TodoWrite - Create and manage task lists during coding sessions

User Interaction:
- AskUserQuestion - Ask questions during execution with multiple choice options (supports multi-select)

Extensibility:
- SlashCommand - Execute custom slash commands defined in .claude/commands/
- Skill - Execute skills (currently none installed in your environment)

Information Gathering:
- WebSearch - Search the web for current information
- WebFetch - Fetch and analyze content from URLs

Specialized Agents:
- Task - Launch specialized agents for complex tasks:
- Explore - Fast codebase exploration
- Plan - Planning agent
- general-purpose - Multi-step task handling
- changelog-generator - Generate changelogs from git commits
- marketing-agent - Translate technical content to plain language

All other tools (Bash, Read, Write, Edit, Glob, Grep, NotebookEdit) are file/system operation tools rather
than chat-specific features.
```

As you can see Claude can do a lot without MCP. One important thing that I need to call it out is that becauise claude code can run bash commands in your terminal, that's perhaps is one of the most powerful things of the universe. MCP is great but there are lots of bad actors out there and you need be careful using MCP. Now using claude code tools and only leveraging whats in your machine, you are more secure.Because if you have a veted process to get tools in your machine or you do your due dilligence for what you install, them you can pigbank on that.

Running bash, it's a swiss army knife. You can do almost anything with bash. For instance, here is a list of things, and not limited but what claude can do with bash:
* **Run any docker container**: Same for podman. Yes there is a vector attack here, but if you get your containers from a internal trusted registry, you are gold.
* **Execute**: Claude can also execute any command on a container, so it can run sql, it can deploy pods in k8s, it can create data, it can do anything you can do in bash.
* **Script**: Claude can create the script you need to get something done and executed.


## Status Line

Claude status Line, it's a feature where you can customize the status line that appears at the bottom of the Claude Code interface. You can do that to display useful information, there is a MCP for that called `ssstatusline`. You can use that MCP to create your [own status line](https://github.com/sirmalloc/ccstatusline).

To install:
```bash
npx ccstatusline@latest
```
```
CCStatusline Configuration | v2.0.21

╭────────────────────────────────────────────────────────────────────────────────────────────────────────────────╮
│ > Preview  (ctrl+s to save configuration at any time)                                                          │
╰────────────────────────────────────────────────────────────────────────────────────────────────────────────────╯
  Model: Claude | Ctx: 18.6k | ⎇ main | (+42,-10)

Main Menu

▶  📝 Edit Lines
   🎨 Edit Colors
   ⚡ Powerline Setup

   💻 Terminal Options
   🌐 Global Overrides

   🔌 Uninstall from Claude Code
   🚪 Exit

  Configure any number of status lines with various widgets like model info, git status, and token usage
```

Them do all configs you want and just click on "Install on Claude Code".

## Useful MCPs

Here is a list of useful MCPs for Claude Code, again, use with caution.

* [MCPs](https://mcp.so/)
* [awesome-claude-code](https://github.com/hesreallyhim/awesome-claude-code)
* [awesome-mcp-servers 1](https://mcpservers.org/)
* [awesome-mcp-servers 2](https://github.com/punkpeye/awesome-mcp-servers)
* [model context protocol servers](https://github.com/modelcontextprotocol/servers)