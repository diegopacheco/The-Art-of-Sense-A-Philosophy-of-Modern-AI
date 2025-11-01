# ultrathink

ultrathink is a instruction you give to claude code that makes it think more deeply about the problem at hand. It encourages the model to take extra time to analyze the situation, consider multiple perspectives, and generate more thorough and well-reasoned responses.

<img src="../images/05-cc-ultrathink.png" width="600"/>

The moment you type ultrathink you will see claude highlight the word "ultrathink" with one color per letter explaning that claude will behave differently now.

I asked Claude code the different between normal "Thinking mode on" and "ultrathink" and this is what I got:
```
Normal "Thinking On" Mode

- Claude shows brief internal reasoning between actions
- Thinking appears in short blocks as Claude works
- Uses a standard token budget for reasoning
- Good for general tasks and problem-solving

Ultrathink Mode

- Extended thinking with a much larger token budget (up to 10,000+ tokens)
- Claude spends significantly more time reasoning before responding
- Better for highly complex problems like advanced math, coding, and deep analysis
- Higher latency and cost due to extensive reasoning
- Claude can reason through multiple approaches and self-correct
```