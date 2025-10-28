# Coding Agents

Coding Agents are AI agents focused in writting code. There are many coding agents like: [GitHub Copilot](https://github.com/features/copilot), [Claude Code](https://www.claude.com/product/claude-code), [Amazon Q](https://aws.amazon.com/q/), [AWS Kiro](https://kiro.dev/), [Google Jules](https://jules.google/), [Open AI Codex](https://chatgpt.com/features/codex), [Google Gemini](https://github.com/google-gemini/gemini-cli) and many others. There are basic 3 kinds of coding agents.

## Sandbox Based

Google Jules, Google Gemini, Open AI Code are examples of Sandbox Based coding agents. Such agents have they own enviroments, which is a `sandbox`, meaning if they break out, it's not your machine, so it's more secure. Same solutions often have a CLI option.

## CLI Agents

CLI agents run in your machine. They often much faster than sandboxes but by nature less secure. Examples of CLI agents are Anthropic Claude Code, Open AI Codex CLI, Gemini CLI.

## Agentic Behavior or IDE based Agents

The 3 cathegory of agentsd it's pluged into a IDE. Very often a VSCode fork. Classical example here is Github Copilot, but also Amazon Q and AWS Kiro. This agents are embeded into your idea like VSCode or JetBrains Idea for instance. They are usually slower as CLI agents but more integrated in the development workflow for those who dont like terminal.

This are often called "Agentic Behavior", because they cannot be deployed into production. You cannot host your IDE on AWS and deploy as solution, for that you need an API KEY. 

## API Keys

In the end of the day, if you want use Agents as parts of your infrastructure solution, meaning you want want agents in prod or use agents as part of feature in your systems, you need an API KEY. There are many API KEYS, the best and more common are Anthropic, Open AI, and Google.

Which a API KEY and a programing language like Rust, Scala or Go for instance, you can write a program that is a agent that can run in prodution.