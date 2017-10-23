import { browser, by, element } from 'protractor';

export class ExampleJasminePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
