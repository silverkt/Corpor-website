import { NdtestPage } from './app.po';

describe('ndtest App', () => {
  let page: NdtestPage;

  beforeEach(() => {
    page = new NdtestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
