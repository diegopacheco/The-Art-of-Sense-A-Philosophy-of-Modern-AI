# Documentation

Documentation is a non-ovbious AI use case. Ofcouse if you just ask AI to generate documentation without much explanation(or the tech term its called few-shot) you will get bad results. Because AI will generate a bunch of crap. Now if you carefully tell AI todo and get good questions, a good templat that AI can fulfil you can indead generate amazing results.

Documentation matter,s but it's just testing, something that people should do more but in reality they do not do as much as they should. Usually there is a plenty of things that are not documented, just because they are other priorities and people are slamed with of work doing other things. Sure you could argue that is a culture problem and documentation should be part of the culture and lyfecycle of engineering. In reality things are messy at scale and AI can really help a lot here. As long as we do the right due dilligence.

## Generating Changelogs

Another good case for AI documentation is changelos. Yes, people should do it, and 100% this ia discipline problema and could be fixed without AI. But AI is pretty good into reading git log messages and figuring out what changed and why. It's so good that this is one of the tricks why ai is good in SWE benchmarks like HumanEval. Because it can read the git log and figure out what changed.

Here is some evidence that AI Agents cheat on SWE-bench:
* [Repo State Loopholes During Agentic Evaluation](https://github.com/SWE-bench/SWE-bench/issues/465)
* [Claude 4 hacked SWE-bench by peeking at future commits](https://bayes.net/swebench-hack/)
* [Meta called out SWE bench Verified for being gamed by top AI models. Benchmark might be broken](https://www.reddit.com/r/OpenAI/comments/1nce3ua/meta_called_out_swe_bench_verified_for_being/?utm_source=chatgpt.com)

But this "cheat" also proof they are very good using Git, witch we can use in our advantage.

Here is a claude code command example on how you could generate a changelog:

```
~/.claude/commands/changelog.md
```

changelog.md
```
# Create or update oproject CHANGELOG.md
- Read commits from git history
- Read the code
- Makesure the changelog has meaning
- Do not loose content, dont delete content from other files
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

Another good AI documentation case is that you can make ai generate good documentation about why some changes happened. Imagine that AI could create a timeline with features and explain what features existed in a codebase. AI also can explain maybe technical decisions and explain where things are in the code. Making easier to make sense of projject ad code.

Engineers always need to learn. Companies are always doing aquisitions and code bases always grow. However with the advent of AI we can makle the process faster and easier. Because now you dont need relly in one person you can use a LLM as your owen private architecture to explain to you wants going one.