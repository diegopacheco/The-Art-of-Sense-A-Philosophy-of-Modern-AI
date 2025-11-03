# Why use AI for Testing?

The reality is that software engineers are under constant pressure for delivery. Such pressure plus imature management, leads to skipping tests. You might not write the best abstraction fo the universe, you might not right the best code of the universe in order to deliver, such trade-offs are fine as long as used with balance and you are not living tech-debt first. Now tests, should never ever be skipped, not matter how much in a hurry you are, not matter how much tight yout deadline is, no happer if sprint is close to the end. Skipping tests is the wrong decision always.

We know skipping tests is wrong. But all companies they have legacy systems. There is always software before we arrive in a company(unless is a startup on day 1). The realioty is there is so much technical debt that, you can't pay it all at once. Companies pay technical debt but never as much as they should. Quality ends up being compromised. Which is not a wise decision and eventually will have catastrophic consequences.

Thanks to AI coding agents, now we can add more tests, which before might not be possible due lack of priorization or investments. Now we can do more tests to systems we would not do it, not because we did not want it but because constraints were too high. AI coding agents can help us to write more tests, and better tests, faster. This is huge win, and we should take it.

## Testing AI

We should not test OpenAI API, Anthorpic API. That will cost money and will be hard to get right, due the lack of predictability of such systems. However a Smoke test it would be reasonable. Smoke tests are high level tests that verify that the most important functionalities of a system are working. They are not meant to be exhaustive, but rather to provide a quick check that the system is functioning as expected.

Integration tests that tests functionalities that have AI in the middle or purely AI is okay to test, but you need to be smart because you might not have the same result all the times, so maybe instead of checking an absolute value, maybe if something is presernt, or contains same range of possible values.