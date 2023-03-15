const assert = require("assert");

describe("infohubcomponent-wc rendering", () => {
  browser.url("http://localhost:8081/test-resources/pages/index.html");

  it("tests if web component is correctly rendered", () => {
    const innerContent = browser.$("#myFirstComponent").shadow$("div");

    assert.ok(innerContent, "content rendered");
  });
});
