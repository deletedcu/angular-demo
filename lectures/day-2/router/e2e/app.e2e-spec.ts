import { RouterPage } from './app.po';

describe('router App', () => {
  let page: RouterPage;

  beforeEach(() => {
    page = new RouterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
