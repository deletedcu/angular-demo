import { StarterCodePage } from './app.po';

describe('starter-code App', () => {
  let page: StarterCodePage;

  beforeEach(() => {
    page = new StarterCodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
