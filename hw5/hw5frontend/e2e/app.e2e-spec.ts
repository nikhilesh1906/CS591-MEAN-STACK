import { Hw5frontendPage } from './app.po';

describe('hw5frontend App', function() {
  let page: Hw5frontendPage;

  beforeEach(() => {
    page = new Hw5frontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
