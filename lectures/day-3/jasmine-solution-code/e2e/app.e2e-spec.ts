import { DogHousePage } from './app.po';

describe('dog-house App', () => {
  let page: DogHousePage;

  beforeEach(() => {
    page = new DogHousePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
