# Stress Testing

[Stress Testing / Load Testing](https://diego-pacheco.blogspot.com/2018/06/experiences-building-running-stress.html) is very important. Such a form of testing allows us to detect non-obvious bugs like concurrency issues, memory leaks and performance bottlenecks. All systems and services should have some form of [stress testing](https://diego-pacheco.blogspot.com/2015/08/stress-test-with-gatling.html) in place.

We all know that in reality it's common to see software out there that does not have stress tests. Sometimes we barely see unit tests. Considering the advent of AI coding agents, it's possible to generate stress tests too. Idempotent endpoints will be very easy to test. Non-idempotent endpoints will require some extra work to set up the tests like `Testing Interfaces` and `Test Data Generation`.

AI coding agents can read your API documentation in [Swagger / OpenAPI](https://swagger.io/why-swagger/) format and generate stress tests for you, or if you do not have it, they can do it by reading the whole codebase.