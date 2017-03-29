@Bug
Feature: Exceptions in cucumber hooks must result in failed scenario execution

  Scenario: Execute some hook before scenario
    Given some scenario with some before hook
    When an exception happens during hook execution
    Then the steps should have status Ignored
    But the scenario should be reported as Failing

  Scenario Outline: Execute some hook before scenario outline
    Given <number> scenarios with some before hook
    When an exception happens during hook execution
    Then the steps should have status Ignored
    But the scenario should be reported as Failing

    Examples:
      | number |
      | 1      |
      | 2      |