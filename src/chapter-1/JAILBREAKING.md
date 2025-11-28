# Jailbreaking

[Jailbreaking](https://unit42.paloaltonetworks.com/jailbreak-llms-through-camouflage-distraction/) is the attempt to bypass AI safety measures. Breaking LLM models ethics guidelines to make them produce content that is restricted or disallowed by their creators.

Here are 3 papers, if you want go Deep and understand more about Jailbreaking:
* [Adversarial Poetry as a Universal Single-Turn
Jailbreak Mechanism in Large Language Models](https://arxiv.org/pdf/2511.15304)
* [SequentialBreak: Large Language Models Can be Fooled by Embedding Jailbreak Prompts into Sequential Prompt Chains](https://arxiv.org/abs/2411.06426)
* [The attacker moves second: stronger adaptive attacks bypass defenses against llm jailbreaks and prompt injections](https://arxiv.org/pdf/2510.09023)

From Adversarial Poetry as a Universal Single-Turn Jailbreak Mechanism in Large Language Models paper we see that:
* Authors successfully bypassed safety guardrails across 25 frontier models (including proprietary ones from OpenAI, Anthropic, and Google).
* Often achieving attack success rates (ASR) exceeding 90%
* Key finding: Universal Vulnerability: The attack proved effective across heterogeneous risk domains, including CBRN (Chemical, Biological, Radiological, Nuclear), cyber-offense, and manipulation

<img src="../images/01-jailbreak-ai-llm-gemini3-pro-banana.png" width="600"/>

PS: Image generated with Gemini 3 - Banana Pro Model