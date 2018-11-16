describe("view news list", function() {
  it("initializes with a NewsList object", function() {
    var newsListView = new NewsListView(new NewsList());
    expect(newsListView.newsList).isInstanceOf(NewsList);
  })
  it("renders the list of notes when there are 0 news stories", function() {
    var newsListView = new NewsListView(new NewsList());
    expect(newsListView.renderNewsItems()).isEqualTo("<ul></ul>")
  })
  it("renders the lsit of notes when there is 1 news story", function() {
    var newsList = new NewsList();
    newsList.addNewsItem("Kim Jong Un forgets to write daily propaganda")
    var newsListView = new NewsListView(newsList);
    expect(newsListView.renderNewsItems()).isEqualTo('<ul><li><div>Kim Jong Un forgets to write daily propaganda</div></li></ul>')
  })
  it("renders the list of notes when more than 1 news story exists", function() {
    var newsList = new NewsList();
    newsList.addNewsItem("Jeff Sessions is indeed, a huge twat")
    newsList.addNewsItem("Well, looks like this Brexit shit is here to stay")
    var newsListView = new NewsListView(newsList)
    expect(newsListView.renderNewsItems()).isEqualTo('<ul><li><div>Jeff Sessions is indeed, a huge twat</div></li><li><div>Well, looks like this Brexit shit is here to stay</div></li></ul>')
  })
})
