# Why use AI for Testing?

Software engineers are under constant pressure for delivery. Such pressure plus immature management leads to skipping tests. You might not write the best abstraction for the universe, you might not write the best code to deliver—such trade-offs are fine as long as used with balance and you are not living tech-debt first. Now tests should never be skipped, no matter how much in a hurry you are, no matter how tight your deadline is, no matter if the sprint is close to the end. Skipping tests is always the wrong decision.

We know skipping tests is wrong. But all companies have legacy systems. There is always software before we arrive at a company (unless it is a startup on day 1). The reality is there is so much technical debt that you can't pay it all at once. Companies pay technical debt but never as much as they should. Quality ends up being compromised, which is not a wise decision and eventually will have catastrophic consequences.

Thanks to AI coding agents, now we can add more tests, which before might not be possible due to lack of prioritization or investments. Now we can do more tests to systems we would not do it, not because we did not want to but because constraints were too high. AI coding agents can help us write more tests, and better tests, faster. This is a huge win, and we should take it.

## Testing AI

We should not test OpenAI API or Anthropic API. That will cost money and will be hard to get right, due to the lack of predictability of such systems. However, a smoke test would be reasonable. Smoke tests are high-level tests that verify that the most important functionalities of a system are working. They are not meant to be exhaustive, but rather to provide a quick check that the system is functioning as expected.

Integration tests that test functionalities that have AI in the middle or are purely AI are okay to test, but you need to be smart because you might not have the same result all the time, so maybe instead of checking an absolute value, check if something is present, or contains the same range of possible values.