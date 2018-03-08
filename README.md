# README

## Update March, 2018

The issue has been fixed in the mean time. Have a look at the
 [Github issue](https://github.com/serenity-bdd/serenity-cucumber/issues/80) for details. BTW: Kudos @ [John Ferguson Smart](https://github.com/wakaleo)!

Note that this repository no longer illustrates the problem described below as I've updated it to verify that the 
issue actually has been fixed. If you are interested in the original behavior you'll have to check out commit 45b85594.

Screnshot of fixed behavior:

![Screenshot of fixed report](https://raw.githubusercontent.com/datentyp/bugs-cucumber-hooks-and-serenity-report/master/output/fixed-report-screenshot.jpg)

## Introduction

In case an exception happens during hook execution we end up with misleading/wrong results in the Serenity report.

This simple demo project shall illustrate the problem at hand.

## Build

```
$ mvn clean install
```

Note that you don't need to build the project if you just want to see the results. I've included all artifacts from
 the generated target  directory in this repository. Please have a look at [output/site/serenity/index.html](https://rawgit.com/datentyp/bugs-cucumber-hooks-and-serenity-report/master/output/site/serenity/index.html).

## Project Overview 

```
src
└── test
    ├── java
    │   ├── runner
    │   │   └── RunCukesTest.java
    │   └── steps
    │       ├── hooks
    │       │   └── TestHooks.java
    │       └── TestSteps.java
    └── resources
        └── features
            └── test.feature


```

 * The feature file contains one scenario and one scenario outline (with two examples).
 * TestHooks.java contains a hook with a single @Before annotated method that throws a RuntimeException
   (i.e. some DataAccessException during some setup/cleanup step performed by Spring's JdbcTemplate) 


## Actual behavior

Cucumber correctly reports:

```
Failed scenarios:
test.feature:4 # Scenario: Execute some hook before scenario
test.feature:18 # Scenario Outline: Execute some hook before scenario outline
test.feature:19 # Scenario Outline: Execute some hook before scenario outline

3 Scenarios (3 failed)
12 Steps (12 skipped)
0m0.002s
```

JUnit correctly reports:

```
Tests run: 15, Failures: 0, Errors: 3, Skipped: 12
```
Maven correctly reports:

```
[INFO] BUILD FAILURE
```

But the generated Serenity test report claims:

```
2 test scenarios (3 tests in all, including 2 rows of test data)
| 1 passed | 1 ignored | 
```

## Expected behavior

* Serenity must not report any of the (actually ignored) scenarios as passed
* Serenity must not treat exceptions in @Before hooks differently in "Scenario Outlines" and "Scenario"s
* Steps should be reported as Ignored
* Scenarios should be reported as failed (as seen in the Cucumber output)


## References

 * https://github.com/serenity-bdd/serenity-cucumber/issues/80