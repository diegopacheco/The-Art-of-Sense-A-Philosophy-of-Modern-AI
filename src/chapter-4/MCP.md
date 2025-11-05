# Model Context Protocol (MCP)

[Model Context Protocol (MCP)](https://modelcontextprotocol.io/docs/getting-started/intro) was created by [Anthropic in 2024](https://www.whatismcp.com/). The idea of MCP is that you have a standard way to provide context to LLMs. MCP is an open standard that allows developers to create and share context packages that can be used by different LLMs.

MCP is the AI equivalent of [LSP](https://en.wikipedia.org/wiki/Language_Server_Protocol), so you can have one server and that same server can work with a variety of different clients (AI tools). MCP is designed to be model-agnostic, so you can use the same context package with different LLMs.

## MCP Architecture

MCP has a HOST which is the AI Agent or tool. Inside that host there are one or many MCP clients which connect to one or many MCP Servers.

<img src="../images/04-MCP_basics.png" width="600"/>

As you can see in the previous picture, we are using [Postgres MCP](https://github.com/crystaldba/postgres-mcp) to read data from tables in plain English. We are also using [Slack MCP](https://github.com/korotovsky/slack-mcp-server) to send a message to our team asking for a [PR](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) review.

## Awesome MCPs

Here is a curated list of [lots of MCPs](https://mcpservers.org/) you can use (be careful). Awesome MCPs include a list of local and remote MCPs, alongside Claude skills.
