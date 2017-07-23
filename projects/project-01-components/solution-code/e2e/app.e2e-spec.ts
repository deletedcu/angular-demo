import { ImperialFleetPage } from './app.po';

describe('imperial-fleet App', () => {
  let page: ImperialFleetPage;

  beforeEach(() => {
    page = new ImperialFleetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
