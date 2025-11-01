# Coding Agents

Coding Agents are AI agents focused on writing code. There are many coding agents like: [GitHub Copilot](https://github.com/features/copilot), [Claude Code](https://www.claude.com/product/claude-code), [Amazon Q](https://aws.amazon.com/q/), [AWS Kiro](https://kiro.dev/), [Google Jules](https://jules.google/), [Open AI Codex](https://chatgpt.com/features/codex), [Google Gemini](https://github.com/google-gemini/gemini-cli) and many others. There are basically 3 kinds of coding agents.

## Sandbox Based

Google Jules, Google Gemini, Open AI Code are examples of Sandbox Based coding agents. Such agents have their own environments, which is a `sandbox`, meaning if they break out, it's not your machine, so it's more secure. Some solutions often have a CLI option.

## CLI Agents

CLI agents run on your machine. They are often much faster than sandboxes but by nature less secure. Examples of CLI agents are Anthropic Claude Code, Open AI Codex CLI, Gemini CLI.

## Agentic Behavior or IDE based Agents

The 3rd category of agents is plugged into an IDE. Very often a VSCode fork. Classical example here is Github Copilot, but also Amazon Q and AWS Kiro. These agents are embedded into your IDE like VSCode or JetBrains Idea for instance. They are usually slower than CLI agents but more integrated in the development workflow for those who don't like the terminal.

These are often called "Agentic Behavior", because they cannot be deployed into production. You cannot host your IDE on AWS and deploy it as a solution, for that you need an API KEY. 

## API Keys

At the end of the day, if you want to use Agents as parts of your infrastructure solution, meaning you want agents in prod or use agents as part of a feature in your systems, you need an API KEY. There are many API KEYS, the best and most common are Anthropic, Open AI, and Google.

With an API KEY and a programming language like Rust, Scala or Go for instance, you can write a program that is an agent that can run in production.