class Page {
  constructor() {}

  open(path) {
    browser.url(`/${path}`)
  }

  rundebug() {
    return browser.debug();
  }

  runPause(param) {
    return browser.pause(param);
  }


  getTitle() {
    return browser.getTitle();
  }

  hitEnter() {
    return browser.keys('\uE007');
  }

  expectH3(header) {
    $(`h3*=${header}`).waitForVisible();
  }

  elementByDataTestId(testId) {
    return $(`[data-test-id="${testId}"]`);
  }

  elementByInputType(inputType) {
    return $(`input[type="${inputType}"]`);
  }

  elementByLinkText(linkText) {
    return $(`a=${linkText}`);
  }

  elementByButtonText(buttonText) {
    return $(`button=${buttonText}`);
  }
}
module.exports = Page;
