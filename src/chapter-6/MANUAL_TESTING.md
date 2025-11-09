# Manual Testing

Manual testing is an anti-pattern. It's wrong, it's slow, it's expensive and does not scale. Humans can make mistakes, get tired, bored and frustrated. Meaning that the mood of the QA might influence the quality of the tests.

Tests should always be automated. However, there is a sad reality in companies that it's not uncommon to find a lot of manual tests happening. Usually you can catch that if someone or a group of people need to sign a release. Why is software not released automatically if all tests pass?

Well, it doesn't matter why this problem happens, but now with the advent of AI coding agents it's possible to use AI to feed all documentation you might have, all tickets, all screenshots and ask LLMs to generate end-to-end or even regression tests for you. Such tests can be written in Cypress, Playwright, Selenium or any other framework you might be using.

Now we will go from manual testing to AI-assisted automated tests.