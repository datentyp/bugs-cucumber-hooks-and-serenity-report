package steps.hooks;

import cucumber.api.java.Before;

public class TestHooks {

    @Before
    public void setup() {
        System.out.println("Executing @Before Hook");
        // simulate some external operation that fails, e.g. database setup/cleanup
        throw new RuntimeException("Oops! Some exception happened during hook execution!");
    }
}
