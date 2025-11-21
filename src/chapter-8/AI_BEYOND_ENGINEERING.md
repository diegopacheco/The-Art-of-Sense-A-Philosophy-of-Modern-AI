# AI Beyond Engineering

AI is a slot machine, you cannot have predictable results every time. For engineering is safer to start with AI because you have engineers who `can and should` pay attention to detals being the `adults in the room`. Offcourse if same engineers do not pay attention we are in trouble. Because:
* Either we are [moving the bottleck to the next queue](https://diego-pacheco.blogspot.com/2025/11/ai-coding-agents-economics.html) on the software development pipeline.
* Foolling ourselfs with `Fabricated Savings` or `Fabricated Productivity`.
* Making your life good(you got 10x productivity and dont look the code because your are a vibe coder) but your workmate life miserable(because he/she need review 10x more thrash that people produce and don't even botter read).

## Debunking FTL

You probably heard about FTL(Faster Than Light). You remeber Star Wars when the ship used to `Hyper Drive` to go faster than light speed. That was amazing and cool right? (BTW I love StarWars). You only need a SHIP that can travel faster than light right? IF the ship traveling 90mph and now (using AI) we hyperdrive to 9000mph we are FTL right? NO. Because the universe has other rules. You need to have a SHIP that can handle the speed, you need to have a navigation system that can handle the speed, you need to have a destination that can handle the speed. You need to have a crew that can handle the speed. You need to have a fuel that can handle the speed. You need to have a space-time that can handle the speed. So even if you have a ship that can travel faster than light, you are still limited by other factors. More simply saying "You need EYEs" and a "BRAIN" that can handle events and reasoning at this speed.

<img src="../images/08-FTL.png" width="600"/>

De-nerding a little bit. Now imagine something mroe simple, like you have a CAR and you was driving fine at 75mph, now using the advent of Generative AI, LLMs and Coding Agents you achive 300mph, unless you are a seasoned F1 driver you will crash the car, you will hit a wall. Why? Because you improve one thing (the car) but did you improve your driving skills? Did you improve the road conditions? Did you improve the traffic rules? Did you improve the weather conditions? No. So you are going to crash. Same with software development, you can improve the coding speed, but if you don't improve the other aspects of software development, you are going to crash.

## Artificial Savings

In the past, people used to use the word "Discounts", today that word is deprecated, people prefer to use the workd "Savings", which I get it, it's a much more positive and sexy word. Now let's imagine this:

<img src="../images/08-artificial-savings.png" width="300"/>

You don't need buy a tablet. You have 500 USD in the wallet. Now you see an AD saying buy a tablet from 500 USD to 300 USD. The ad has the title "Savings". You think, well the phone will go back to 500 USD to I'm doing savings, right? NO. But you think, I'm loosing, so the AD create this sense of urgency... You are just spending 300 USD instead of 500 USD. You are not saving anything. Savings would be that somehow you turn your 500 USD into 800 USD. 

Why I'm saying this, well AI can be 100% the same thing but on esteroids.You got 2x productivity, 10x improvements, 50% gains. But in reality is this real or just fabricated numbers. It's possible to fabricate numbers, but can you do that sustainably? NO you cannot. Maybe it's better to the HARD thing that takes longer but you have SUSTAINABLE results. We need to lern how to use AI in a way that we can have SUSTAINABLE productivity gains, not just FABRICATED savings.

## System 1 vs System 2 Thinking and AI

<img src="../images/08-system-1-2.png" width="600"/>

⚾ The Bat-and-Ball Problem
* A bat and a ball together cost $1.10.
* The bat costs $1.00 more than the ball.
* How much does the ball cost?

System 1: Immediate answer: 10 cents (intuitive but incorrect)

System 2: Analytical answer: 5 cents (correct)

Because:
```
Ball = x
Bat = x + $1.00

Total cost:
x + (x + 1.00) = 1.10
2x + 1.00 = 1.10
2x = 0.10
x = 0.05
```

That come from the classical book [Thinking, Fast and Slow](https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555) which is from 2013 by Daniel Kahneman.

Why that matters in AI context? Because when we are using AI for sher speed and productivity, we are relying on System 1 thinking, which is fast, intuitive, and automatic. Vibe-Coding(Which is an anti-patterns) get us `adicted` and just want move fast, fast, fast, don't think. Well we need to think, we need to make sense of things and `reflect` and do `Retrocpetives` and drive leasons learned. Otherwise remeber FTL and Artificial Savings. What you need to think about is, how fast can you think, are you just operating with System #1 all time. If that is true, maybe AI downgraded your job and you do more tatical wotk instead of strategic work. You need to find the balance between System 1 and System 2 thinking when using AI in software development.

## Byond Engineering

It's very risk to do AI beyond engineering because of several factors like:
* Security: AI can introduce security vulnerabilities that are not easily detectable. Engineers need to be vigilant and ensure that AI-generated code adheres to security best practices.
* Trustworthiness: AI systems can produce unpredictable results. User experience might be damanged or even worth brand reputation if AI-generated code fails in production.
* Ethical Considerations: AI can inadvertently introduce biases or unethical practices in code. Maybe even worst could AI feature leads to law suits or regulatory fines.

For such reasons and many more AI it's more safe into engineering teams where you have professionals that can mitigate the risks. But if you are thinking to use AI beyond engineering teams, you need to have a very strong governance model, with clear policies and procedures to ensure that AI is used responsibly and ethically. Another way to see this is it's amost like you need new principles or new pratices that could allow you to use AI in a safe way in production enviroments for digital products.

## When Gen-AI or Agents are Dangerous

When some input or prompt from the user gets executed directly in production without any guardrails or validation. It's alos like the user prompt need to be sanitized or protected against SQL injection or JS injection attacks. IF you blindly get the promopt from the user and run in production (like a good remote code execution security antipattern) you are in big trouble. You need to have a layer of validation, verification, testing, monitoring and alerting to ensure that the AI-generated code is safe and secure before it gets deployed to production.

<img src="../images/08-no-guardrails.png" width="600"/>

## How to USE Gen AI Safely Beyond Engineering in Production

IF you want to buid AI Features, you need a lot of things like:
* Porper Guardrails: Limit how long a agent process a request, limit in cost, or you can limit in type or interations.
* Sanitization: Ensure that any input from users is sanitized to prevent injection attacks or other security vulnerabilities.
* Validation: Implement validation checks to ensure that AI-generated code meets quality and security standards before deployment.

## Human in the Loop

So the users can typo prompts in applications in production, however nothing gets executed, the only thing is that the LLM output is a JSON document which structure and "intentions". Them a human in the loop, basically using a admin or backoffise web application goes there and review what the user typed or what AI actually generated and them approve or reject. This way a lot of problems and risks are mitigated because you have a human reviewing the output before going to production.

## Audible Response Unit (ARU) Strategy

What IF? You use a prompt for the final user, that way, the user can get a better experience by "reducing the complexity of the user experience" but you craft a system prompt that translate whatever the user typed into finate options let's say 0 to 5. Where 0 is invalid action and 1, 2, 3, 4 and 5 are valid ations. So you literaly ask the LLM to return a number and you just parse that number from string to integer. That way, even if the user managed to "tricky the LLM" your system is not blindly execution what the user type on the prompt because you are just doing numbers parsing. This is a very simple but effective way to mitigate risks when using AI beyond engineering in production enviroments.

<img src="../images/08-ARU_Strategy.png" width="600"/>

If you think about it, ARU systems used that for ages, chatbots did the similar strategy where you can type whatever but there is a finite set of options that the bot can understand and process. So you are not blindly executing whatever the user type, you are just mapping the user input to a finite set of valid actions.

