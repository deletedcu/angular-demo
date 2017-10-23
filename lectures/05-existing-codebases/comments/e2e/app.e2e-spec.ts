import { CommentsPage } from './app.po';

describe('comments App', () => {
  let page: CommentsPage;

  beforeEach(() => {
    page = new CommentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
