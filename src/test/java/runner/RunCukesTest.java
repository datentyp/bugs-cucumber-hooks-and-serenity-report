package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
        features = "src/test/resources/features",
        snippets = SnippetType.CAMELCASE,
        glue = "steps",
        plugin = {"pretty", "html:target/cucumber", "json:target/cucumber.json"},
        strict = true
)
public class RunCukesTest {

}