# AI to Help with Testing

One of the best use cases for AI in engineering is around test geenration. AI is very good generating tests. [Facebook has this amazing paper](https://arxiv.org/pdf/2402.09171) abut they findings using AI to generate tests, published in 2024.

You can use AI to:
* Generate Unit Tests
  * Considering Happy Path
  * Considering Edge Cases
  * Considering Error Handling
  * Consideting negative and boundary cases
  * Considering a bit of chaos like random inputs or even nulls and unexpected types/values
* Generate Integration Tests
* Generate End to End Tests

Now for Integration tests we need keep in we will need setup infrastructure in order to do [proper test induction](https://diego-pacheco.blogspot.com/2024/07/testing-queues-and-batch-jobs.html). But you can use AI to create testing interfaces and them have proper testing strucute and proper testing principles in place.

You can also use AI in order to check if you have gaps in your tests coverage, just ask it for it. Even if AI goes wrong, this is relatively safe, worst it will happen AI will generate tests you dont need, them you can delete them. Facebook talks about this in their paper. Facebook solution is to blend with engineering, running the tests, checking coverage, and getting rid of uncessary tests.

All tasts that claude code can do, either by custom agents, custom commands or a simple a good prompt. I recommend custom commands for this, as you can have a more structured approach.