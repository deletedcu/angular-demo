import { StarwarsPage } from './app.po';

describe('starwars App', () => {
  let page: StarwarsPage;

  beforeEach(() => {
    page = new StarwarsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
