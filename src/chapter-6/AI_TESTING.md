# AI to Help with Testing

One of the best use cases for AI in engineering is around test generation. AI is very good at generating tests. [Facebook has this amazing paper](https://arxiv.org/pdf/2402.09171) about their findings using AI to generate tests, published in 2024.

You can use AI to:
* Generate Unit Tests
 * Considering Happy Path
 * Considering Edge Cases
 * Considering Error Handling
 * Considering negative and boundary cases
 * Considering a bit of chaos like random inputs or even nulls and unexpected types/values
* Generate Integration Tests
* Generate End to End Tests

Now for integration tests, we need to keep in mind we will need to set up infrastructure in order to do [proper test induction](https://diego-pacheco.blogspot.com/2024/07/testing-queues-and-batch-jobs.html). But you can use AI to create testing interfaces and then have proper testing structure and proper testing principles in place.

You can also use AI to check if you have gaps in your test coverage, just ask it for it. Even if AI goes wrong, this is relatively safe; worst case, AI will generate tests you don't need, then you can delete them. Facebook talks about this in their paper. Facebook's solution is to blend with engineering, running the tests, checking coverage, and getting rid of unnecessary tests.

All tasks that Claude Code can do, either by custom agents, custom commands, or a simple good prompt. I recommend custom commands for this, as you can have a more structured approach.