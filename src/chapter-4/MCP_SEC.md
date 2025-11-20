# Security and MCPs

MCP is awesome. However, we need to remember that for coding agents running in your CLI with your machines, running commands can be a [nightmare for security](https://blog.sshh.io/p/everything-wrong-with-mcp?utm_source=pocket_shared). Especially if your laptop is a corporate MacBook that is on a corporate network. There are many [attack vectors](https://forgecode.dev/blog/prevent-attacks-on-mcp/). Sandboxes suck for developers; it's not the best developer experience. So what do we do then?

Well we have a similar problem in security to MCPs which is called: Vulnerabilities. MCPs are not that different from vulnerabilities in libraries because there is an explosion of libraries.

There are dozens to hundreds of MCPs being created every day. Some of them are good, some of them are bad. Some of them are malicious. So how do we know which MCPs are safe to use?

## MCP Guardrails

MCP Requires some guardrails. Here are some ideas:
* Only use MCPs from trusted sources. Like official marketplaces or repositories.
* Scan MCPs for vulnerabilities before using them.
* Use MCPs in isolated environments. Like sandboxes or containers.

## Treating MCP as a BOMB

Andrew Zigler has this amazing blog post: [Treating MCP servers like bombs](https://devinterrupted.substack.com/p/treating-mcp-servers-like-bombs) which is spot on. This is one way of dealing with MCPs. Imagine someone or some automated process goes and checks out an MCP in an isolated environment, runs some tests on it, and then decides if it's safe to use or not.

## MCP Scanning

There are proper MCP Scanning solutions out there. Like [Evo by Snyk](https://evo.ai.snyk.io/) or if you want something open source consider [Cisco MCP Scanner](https://github.com/cisco-ai-defense/mcp-scanner).

