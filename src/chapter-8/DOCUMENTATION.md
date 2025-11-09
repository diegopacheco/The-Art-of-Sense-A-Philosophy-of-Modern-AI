# Documentation

Documentation is a non-obvious AI use case. Of course, if you just ask AI to generate documentation without much explanation (or the tech term is called few-shot), you will get bad results. Because AI will generate a bunch of crap. Now if you carefully tell AI what to do and ask good questions, provide a good template that AI can fulfill, you can indeed generate amazing results.

Documentation matters, but it's just like testing, something that people should do more but in reality they do not do as much as they should. Usually there are plenty of things that are not documented, just because there are other priorities and people are slammed with work doing other things. Sure you could argue that it's a culture problem and documentation should be part of the culture and lifecycle of engineering. In reality, things are messy at scale and AI can really help a lot here, as long as we do the right due diligence.

## Generating Changelogs

Another good case for AI documentation is changelogs. Yes, people should do it, and 100% this is a discipline problem and could be fixed without AI. But AI is pretty good at reading git log messages and figuring out what changed and why. It's so good that this is one of the tricks why AI is good in SWE benchmarks like HumanEval. Because it can read the git log and figure out what changed.

Here is some evidence that AI Agents cheat on SWE-bench:
* [Repo State Loopholes During Agentic Evaluation](https://github.com/SWE-bench/SWE-bench/issues/465)
* [Claude 4 hacked SWE-bench by peeking at future commits](https://bayes.net/swebench-hack/)
* [Meta called out SWE bench Verified for being gamed by top AI models. Benchmark might be broken](https://www.reddit.com/r/OpenAI/comments/1nce3ua/meta_called_out_swe_bench_verified_for_being/?utm_source=chatgpt.com)

But this "cheat" also proves they are very good at using Git, which we can use to our advantage.

Here is a Claude Code command example on how you could generate a changelog:

```
~/.claude/commands/changelog.md
```

changelog.md
```
# Create or update project CHANGELOG.md
- Read commits from git history
- Read the code
- Make sure the changelog has meaning
- Do not lose content, don't delete content from other files
- I want the following sections in the changelog:
  - Added
  - Changed
  - Deprecated
  - Removed
  - Fixed
  - Security
- Give me a commit count per user
```


## Generating Knowledge Base

Another good AI documentation case is that you can make AI generate good documentation about why some changes happened. Imagine that AI could create a timeline with features and explain what features existed in a codebase. AI also can explain maybe technical decisions and explain where things are in the code, making it easier to make sense of the project and code.

Engineers always need to learn. Companies are always doing acquisitions and codebases always grow. However, with the advent of AI, we can make the process faster and easier. Because now you don't need to rely on one person; you can use an LLM as your own private architect to explain to you what's going on.