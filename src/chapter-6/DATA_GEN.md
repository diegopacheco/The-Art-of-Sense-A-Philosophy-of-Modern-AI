# Data Generation

Unit Tests might require techniques like test doubles, stubs or even [mocks](https://diego-pacheco.blogspot.com/2025/10/testing-mocks.html). However you can easily supply the data needed. However when we are dealing with integration tests we need data in order to execute the tests.

Integration Tests might need data for a variety of reasons:
* Delete: You are testing something that is not present or missing, so you need to delete data.
* Update: You might need a very specific state, so you update the data to match that state.
* Create: You might need to create data in order to test something that requires data to be present.

Given that you have an endpoint (REST API) where you have types and relationships between those types, you might need to create a lot of data in order to test something. Such a task is tedious and time consuming. AI can help you [generate test data](https://diego-pacheco.blogspot.com/2021/02/synthetic-data-generation-and-java-faker.html) easily and fast.

For instance, in JavaScript there is this nice library called [faker.js](https://fakerjs.dev/) that can help you generate data for your tests. You can use it to generate data for your integration tests. AI can do that on steroids.

You can ask AI coding agents to generate data either with `code` or simply with a `script` that inserts the data before you run your tests. You can also use AI to create `Testing Interfaces` and add custom APIs in order to expose `state` for your tests in non-prod.

AI can be unpredictable, hallucinate and even make mistakes. However, code is code. If written well, it is reliable, so one of the best things you can do is ask AI to generate code, review the code and make sure it is right. Now you can just run the code and have predictable results.

## Asking the right questions for Test Data Generation

Here are some examples of the `right` things you could ask AI Coding agents to do for you:
1. Ask AI to use the same open source frameworks you use like: [JUnit](https://junit.org/), [Jest](https://jestjs.io/), [Playwright](https://playwright.dev/), [K6](https://k6.io/).
2. Ask AI to generate a function/method that will run before the test that inserts all data you need.
3. By inserting data you mean: using or creating testing interfaces in services.
4. Ask AI to generate a clean up function/method that will run after the test that will delete all data you created.
5. Ask AI to never hardcode IDs, and always use the test data interfaces to create and delete data.
6. Ask AI to generate data that is realistic and not just random data.

Done, even if AI does it wrong, you can go there and fix it. Now once you have the code, you have predictable code that will generate the data you need for your tests. Testing interfaces are part of the service or component code base. We do not want to run testing interfaces in production. However, because they are code, we can also ask AI coding agents to create integration tests for them that live inside the code. That way we are testing the testing interfaces as well.