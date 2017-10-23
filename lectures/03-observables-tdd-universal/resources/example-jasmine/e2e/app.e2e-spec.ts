import { ExampleJasminePage } from './app.po';

describe('example-jasmine App', () => {
  let page: ExampleJasminePage;

  beforeEach(() => {
    page = new ExampleJasminePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
