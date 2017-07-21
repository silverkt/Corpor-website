import { NewtetPage } from './app.po';

describe('newtet App', () => {
  let page: NewtetPage;

  beforeEach(() => {
    page = new NewtetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
