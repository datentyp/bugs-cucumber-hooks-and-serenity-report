$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/test.feature");
formatter.feature({
  "name": "Exceptions in cucumber hooks must result in failed scenario execution",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Bug"
    }
  ]
});
formatter.scenario({
  "name": "Execute some hook before scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Bug"
    }
  ]
});
formatter.before({
  "error_message": "java.lang.RuntimeException: Oops! Some exception happened during hook execution!\n\tat steps.hooks.TestHooks.setup(TestHooks.java:11)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:17)\n\tat cucumber.runner.UnskipableStep.executeStep(UnskipableStep.java:22)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:367)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:274)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:161)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\n",
  "status": "failed"
});
formatter.step({
  "name": "some scenario with some before hook",
  "keyword": "Given "
});
formatter.match({
  "location": "TestSteps.java:8"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "an exception happens during hook execution",
  "keyword": "When "
});
formatter.match({
  "location": "TestSteps.java:12"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the steps should have status Ignored",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.java:16"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the scenario should be reported as Failing",
  "keyword": "But "
});
formatter.match({
  "location": "TestSteps.java:20"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Execute some hook before scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "\u003cnumber\u003e scenarios with some before hook",
  "keyword": "Given "
});
formatter.step({
  "name": "an exception happens during hook execution",
  "keyword": "When "
});
formatter.step({
  "name": "the steps should have status Ignored",
  "keyword": "Then "
});
formatter.step({
  "name": "the scenario should be reported as Failing",
  "keyword": "But "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "number"
      ]
    },
    {
      "cells": [
        "1"
      ]
    },
    {
      "cells": [
        "2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Execute some hook before scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bug"
    }
  ]
});
formatter.before({
  "error_message": "java.lang.RuntimeException: Oops! Some exception happened during hook execution!\n\tat steps.hooks.TestHooks.setup(TestHooks.java:11)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:17)\n\tat cucumber.runner.UnskipableStep.executeStep(UnskipableStep.java:22)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:367)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:274)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:161)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\n",
  "status": "failed"
});
formatter.step({
  "name": "1 scenarios with some before hook",
  "keyword": "Given "
});
formatter.match({
  "location": "TestSteps.java:8"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "an exception happens during hook execution",
  "keyword": "When "
});
formatter.match({
  "location": "TestSteps.java:12"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the steps should have status Ignored",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.java:16"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the scenario should be reported as Failing",
  "keyword": "But "
});
formatter.match({
  "location": "TestSteps.java:20"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Execute some hook before scenario outline",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Bug"
    }
  ]
});
formatter.before({
  "error_message": "java.lang.RuntimeException: Oops! Some exception happened during hook execution!\n\tat steps.hooks.TestHooks.setup(TestHooks.java:11)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:32)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:26)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.HookDefinitionMatch.runStep(HookDefinitionMatch.java:17)\n\tat cucumber.runner.UnskipableStep.executeStep(UnskipableStep.java:22)\n\tat cucumber.api.TestStep.run(TestStep.java:83)\n\tat cucumber.api.TestCase.run(TestCase.java:58)\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:117)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:126)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:367)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:274)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:161)\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:290)\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:242)\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:121)\n",
  "status": "failed"
});
formatter.step({
  "name": "2 scenarios with some before hook",
  "keyword": "Given "
});
formatter.match({
  "location": "TestSteps.java:8"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "an exception happens during hook execution",
  "keyword": "When "
});
formatter.match({
  "location": "TestSteps.java:12"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the steps should have status Ignored",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.java:16"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the scenario should be reported as Failing",
  "keyword": "But "
});
formatter.match({
  "location": "TestSteps.java:20"
});
formatter.result({
  "status": "skipped"
});
});