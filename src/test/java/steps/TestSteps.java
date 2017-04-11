package steps;

import cucumber.api.java8.En;

public class TestSteps implements En {

    public TestSteps() {
        Given("(.*) scenario[s]? with some before hook", (String number) -> {
            System.out.println("Executing: Given step...");
        });

        When("an exception happens during hook execution", () -> {
            System.out.println("Executing: When step...");
        });

        Then("the steps should have status Ignored", () -> {
            System.out.println("Executing: Then step...");
        });

        But("the scenario should be reported as Failing", () -> {
            System.out.println("Executing: But step...");
        });
    }
}
