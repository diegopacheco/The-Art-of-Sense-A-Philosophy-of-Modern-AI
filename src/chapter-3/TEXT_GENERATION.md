# Text Generation

LLMs are all about text generation. They generate a text based on a input text which is called "prompt". There is basically 2 prompts an LLM uses:

1. System Prompt: This is a special prompt that sets the behavior of the LLM. It tells the model how to respond, what style to use, and any specific instructions. For example, a system prompt might instruct the model to respond in a formal tone or to provide concise answers.

2. User Prompt: This is the actual input from the user. It can be a question, a statement, or any text that the user wants the model to respond to.

When you provide a user prompt, the LLM processes it along with the system prompt (if provided) and generates a response based on its training data and the instructions given in the system prompt.

In the beginning the term used to be "prompt engineering" which was the art of crafting the perfect prompt to get the desired response from an LLM. However, as LLMs have become more advanced, they are better at understanding and responding to a wide range of prompts without the need for intricate engineering.

Currently the most common term is "context engineering" which focuses on providing the right context to the LLM to get the best possible response. This can involve providing additional information, clarifying instructions, or setting specific parameters for the response.

Nowadays AI coding agents often ask questions to the user to gather more context before generating a response. This iterative process helps ensure that the LLM has all the necessary information to provide a relevant and accurate answer.