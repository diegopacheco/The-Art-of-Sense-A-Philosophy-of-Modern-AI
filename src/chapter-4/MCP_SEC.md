# Security and MCPs

MCP is awesome. However we need to remeber that for coding agents running in your CLI with your machines running commands can be a [nightmare for security](https://blog.sshh.io/p/everything-wrong-with-mcp?utm_source=pocket_shared). Specially if your laptop is a corpotate macbook, that is on a corporate network. There any many [attack vectors](https://forgecode.dev/blog/prevent-attacks-on-mcp/). Sandboxes sucks for developers, it's not the best developer experience. So what we do them.

Well we have a similar problem in security to MCPs which is called: Vulnerabilitites. MCPs are not that different from vulnerabilitites in libraries because there is a explosion of libraries. 

There are dozens to hundreds of MCPs being created every day. Some of them are good, some of them are bad. Some of them are malicious. So how do we know which MCPs are safe to use?

## MCP Guardrails

MCP Requires some guardrails. Here are some ideas:
* Only use MCPs from trusted sources. Like official marketplaces or repositories.
* Scan MCPs for vulnerabilities before using them. 
* Use MCPs in isolated environments. Like sandboxes or containers.

## Threating MCP as a BOMB

Andrew Zigler has this amazing blog post: [Treating MCP servers like bombs](https://devinterrupted.substack.com/p/treating-mcp-servers-like-bombs) which is spot on. This is one way of dealign with MCPs. Imagine someone or some automated process go checkout a MCP in a isolated environment, run some tests on it, and then decide if it's safe to use or not.

## MCP Scanning

There are proper MCP Scanning solutions out there. Like [Evo by Snyk](https://evo.ai.snyk.io/) or if you want something open source consider [Cisco MCP Scanner](https://github.com/cisco-ai-defense/mcp-scanner).

