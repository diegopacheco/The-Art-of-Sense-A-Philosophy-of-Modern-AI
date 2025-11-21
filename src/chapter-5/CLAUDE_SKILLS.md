# Claude Skills

MCP has several issues, like context overhead, [lack of proper security](https://astrix.security/learn/blog/state-of-mcp-server-security-2025/) and guardrails. MCPs can be local or can be remote. MCPs were created by Anthropic, others followed and it became a huge thing. Well huge in the sense of many many MCPs out there but adoption at enterprise or at scale companies, not so much really.

[Claude-skills](https://www.claude.com/blog/skills-explained) have the potential to reduce a great deal of the MCP issues and even market share, [Claude-Skills are a big deal](https://simonwillison.net/2025/Oct/16/claude-skills/). Anthropic already has a [repository for claude-skills](https://github.com/anthropics/skills) and [awesome-skills](https://github.com/ComposioHQ/awesome-claude-skills/) too.

## The Issue with MCPs

It's that we are throwing all the data up front on the context window, which is limited. Remember when we do `/context` we can see the context window used. This is not scalable. Because what IF Claude never uses the MCP you add there? You just waste space on the context window for nothing. Also every MCP throws a lot of text into the context window, which is not efficient.

So MCP in a nutshell is throwing a lot of data into the LLM and hoping it will use it.

## How Claude Skills Work

Claude skill works fundamentally different. Instead of throwing all the data into the context window, Claude skills are more like API calls. You define a skill, which is a specific function or capability that Claude can use. When Claude needs to perform a task that requires that skill, it makes a call to the skill, passing only the necessary information.

[Claude skills (or Agent skills)](https://claude.com/blog/skills) are CODE. That's funny isn't it? We used to write all the code, now AI writes the code for us, and now we write code for AI so AI knows how to better write code. But the idea of Claude-Skills is brilliant, basically there is a simple file like `skill.md` where there are just a couple of examples for Claude on how to use the code. Then you ship a script which has the recipe on how to do the task. When Claude needs to do the task, it calls the skill, passing only the relevant data. The shift here is huge, we are not throwing a lot of data into Claude anymore (MCP) we are actually teaching it how to do something (as the name says hence a "skill") which is all about coding and programming languages.

Code is great, code is predictable and reliable (all that generative AI and LLMs are not), so Code is a great solution to the MCP issues. Also there is a non-obvious thing going on here which is, with claude-skills you are not downloading the skills from some random dude on github, you are creating the skills by yourself with or without help from Claude, by nature is more secure and FTEs writing code is more reliable and "secure" than random MCP from some dude on the internet.

Here is a simple example of claude-skill a built to [format JSON](https://github.com/diegopacheco/ai-playground/tree/main/agents/claude-code/claude-skill-fun).

## When we would still use MCP?

Well, with Claude skills a great share of MCP can be gone and now we can have MCP for remote use cases, you won't be able to run AWS Claude in your machine, or you will have external services like Figma, Jira, Salesforce, etc. So MCP will be more for [remote use cases](https://blog.christianposta.com/mcp-authorization-patterns-upstream-api-calls/) and claude-skills for local use cases.

## Summary

<img src="../images/05.MCP_claude-skills.png" width="600"/>

source: [https://x.com/diego_pacheco/status/1989959020032266435](https://x.com/diego_pacheco/status/1989959020032266435)