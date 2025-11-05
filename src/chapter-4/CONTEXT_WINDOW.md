# Context Window

[Context window](https://docs.claude.com/en/docs/build-with-claude/context-windows) is the term that refers to the amount of text a model can process as input. LLMs do not have many options to interact with. Simply put, you basically do everything via the context window. What goes in the context window:
* User prompt: The text with the task or action you want the model to do.
* System prompt: The text that tells the model how to behave.
* Few shot examples: Examples of inputs and outputs that help the model perform better.

Pretty much everything goes in the context window. So the context window is critical and a bottleneck in many situations.

Create a markdown table comparing context window and size from OpenAI, Gemini, Grok, GPT 5, Llama 3 and more.
| Model        | Context Window Size.          |
|----------------------|-----------------------|
| GPT-3.5              | 4,096 tokens          |
| GPT-4                | 8,192 tokens          |
| GPT-4-turbo          | 128,000 tokens        |
| Gemini 2.0 Flash.    | 1,000,000 tokens      |
| Gemini 2.0 Pro       | 2,000,000 tokens      |
| Grok 3               | 1,000,000 tokens      |
| Grok 4 Fast          | 2,000,000 tokens      |
| LLaMA 3              | 8,192 tokens          |
| Claude Sonnet 4.5    | 200,000 tokens        |
| Claude Sonnet Corp.  | 1,000,000 tokens      |

