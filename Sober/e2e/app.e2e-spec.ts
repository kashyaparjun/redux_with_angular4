import { SoberPage } from './app.po';

describe('sober App', () => {
  let page: SoberPage;

  beforeEach(() => {
    page = new SoberPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
