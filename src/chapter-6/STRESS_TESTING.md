# Stress Testing

[Stress Testing / Load Testing](https://diego-pacheco.blogspot.com/2018/06/experiences-building-running-stress.html) is very import. Such form of testing allow us to detect non-ovious bugs like concurrency issues, memory leaks and performance bottlenecks. All systems / services should have some form of [stress testing](https://diego-pacheco.blogspot.com/2015/08/stress-test-with-gatling.html) in place.

We all know that in reality is common to see software out there that does not have stress tests, sometimes we barely see unit tests. Considering the advent of AI Coding Agents, it's possible to generate stress tests too. Idepotent endpoints will very easy to test. Non-idempotent endpoints will require some extra work to setup the tests like `Testing Interfaces` and `Test Data Generation`.

AI Coding agents can read your API documentatiion in [Swagger / OpenAPI](https://swagger.io/why-swagger/) format and generate stress tests for you or if you do not have it, they can do it by reading the whole codebase.