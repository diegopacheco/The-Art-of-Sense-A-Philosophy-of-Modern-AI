# Context Window

Context window is the term that referes to the ammount of text a model can process as input. LLM do not have many options to inteact with. Simply put you basically do everything via context window. What goes on the context window:
* User prompt: The text with the task or action you want the model to do.
* System prompt: The text that tells to the model how to behave.
* Few shot examples: Examples of inputs and outputs that help the model to better perform.

Pretty much everysingle thing goes on the context window. So the context window is critical and a bottlenck in many situations.

Create a markdown table comparsin context window and size from, open ai, geminio, grok, gpt 5, llama 3 and more.
| Model        | Context Window Size.       |
|--------------|----------------------------|
| GPT-3.5      | 4,096 tokens               |
| GPT-4        | 8,192 tokens               |
| GPT-4-turbo  | 128,000 tokens             |
| Gemini 2 PROD| 1,000,00 tokens            |
| Grok         | 128,000 tokens             |
| LLaMA 3      | 65,536 tokens              |
| Claude Sonnet 4.5 | 1, 000,000 tokens     |
