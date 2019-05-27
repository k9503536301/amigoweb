export default class NewsApi {
    _url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4261dde66c0c40fdaaeee1fdbef62ba1";

    async getNews() {
        const response = await fetch(this._url);

        if (!response.ok) {
            throw new Error(`Could not fetch ${this._url}` +
                `, received ${response.status}`)
        }

        const {articles} = await response.json();

        return articles;
    };
};
