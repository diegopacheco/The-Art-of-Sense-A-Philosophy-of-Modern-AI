# Data Generation

Unit Tests might require techniques like test doubles, stubs or even mocks. However you can easily supply the data needed. However when we are dealing with integration tests we need data in order to execute the tests.

Integration Tests might need data for a variety of reasons:
* Delete: You are testing something that is not present or missing, so you need delete data.
* Update: You might need a very spesific state, so you update the data to match that state.
* Create: You might need to create data in order to test something that requires data to be present.

Guiven that you have a endpoint(rest api) where you have types and relationships between those types, you might need to create a lot of data in order to test something. Such task is tedius and time consuming. AI can helpo you generate test data easily and fast.

For instance in javascript there is this nice library called [faker.js](https://fakerjs.dev/) that can help you generate data for your tests. You can use it to generate data for your integration tests. AI can do that on esteroids.

You can ASK AI Coding agents to generate data either with `code` or simple with a `script` that inseer the data before you run your tests. You can also use AI to create `Testing Interfaces` and add custom APIs in order to expose `state` for your tests in non-prod.

AI can be umpredictable, halucinate and even make mistakes, however code is code, if written well is reliable, so one of the best things you can is ASK ai to generate code, review the code and make sure is right, now you can just run the code and have predictable results.

## Asking the right questions for Test Data Generation

Here are some examples of the `right` things you could ask AI Coding agents to do for you:
1. Ask AI to use the same open source frameworks you use like: [JUnit](https://junit.org/), [Jest](https://jestjs.io/), [Playwright](https://playwright.dev/), [K6](https://k6.io/).
2. Ask AI to generate a function/method that will run before the test that insert all data you need.
3. By inserting data you mean: using or creating testing interfaces in services.
4. Ask AI to generate a clean up function/method that will run after the test that will delete all data you created.
5. ASK AI to never hardcoded IDs, and always use the test data interfaces to create and delete data.
6. Ask AI to generate data that is realistic and not just random data.

Done, even if AI do it wrong, you can go there and fix it. Now once you have the code, you have the predictable code that will generate the data you need for your tests. Testing interfaces, are part of the service or component code base. We do not want run testing interfaces in production, however because they are code, we can also ask AI Coding agents to create integration tests for them, that live inside of the code, that way we are testing the testing interfaces as well.