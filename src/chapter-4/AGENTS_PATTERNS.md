# Agent Patterns

Coding agents has some [patterns](https://diego-pacheco.blogspot.com/2025/07/ai-agent-patterns.html). The most fammous ones are MCP and RAG. But there are other pattertns like:
* Caching
* Routing
* Filtering
* Spllitting
* Aggregating
* Orchestration

Such patterns are not new. Many of them trace back to the good work of Enterprise Integration Patterns ([EIP](https://www.enterpriseintegrationpatterns.com/)) by Gregor Hohpe and Bobby Woolf.

Software allow us to have greater flexibility. LLMs are not super flexible for customization, you pretty much need to use the context window to customize them. So whatever patter you do (besides MCP) you will be doing BEFORE or AFTER the LLM call.

MCP is different because you are creating something like a "callback" so the LLM will invoke it during the processing. 