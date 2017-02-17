import { ProjttPage } from './app.po';

describe('projtt App', function() {
  let page: ProjttPage;

  beforeEach(() => {
    page = new ProjttPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
