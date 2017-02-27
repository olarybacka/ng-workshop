import { NgBootcampPage } from './app.po';

describe('ng-bootcamp App', () => {
  let page: NgBootcampPage;

  beforeEach(() => {
    page = new NgBootcampPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
