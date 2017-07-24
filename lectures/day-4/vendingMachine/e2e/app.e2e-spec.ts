import { GaAngular2ProjectPage } from './app.po';

describe('ga-angular2-project App', function() {
  let page: GaAngular2ProjectPage;

  beforeEach(() => {
    page = new GaAngular2ProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
