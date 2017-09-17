import { CreateChatbotPage } from './app.po';

describe('create-chatbot App', () => {
  let page: CreateChatbotPage;

  beforeEach(() => {
    page = new CreateChatbotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
