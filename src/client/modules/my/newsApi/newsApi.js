/* eslint-disable no-console */
import { LightningElement, track } from 'lwc';

const API_KEY = 'apiKey=7b6f743f25ba4a869050ff4bb1c3d246';
const END_POINT = 'https://newsapi.org/v2/everything?';

export default class NewsApi extends LightningElement {
    @track query = 'salesforce';
    @track news;
    @track error;
    @track _isRendered = false;

    renderedCallback() {
        // eslint-disable-next-line no-useless-return
        if (this._isRendered) return;
        this._isRendered = true;
        console.log(` rendered value is ${this._isRendered}`);
        this.fetchAPI();
    }

    handleSearchKeyChange(event) {
        this.query = event.target.value;
    }
    fetchAPI() {
        let QUERY_URL = `${END_POINT}q=${this.query}&${API_KEY}`;
        console.log(' QUERY URL ', QUERY_URL);
        fetch(QUERY_URL)
            .then(response => {
                if (!response.ok) {
                    this.error = response;
                }
                return response.json();
            })
            .then(jsonResponse => {
                this.news = jsonResponse.articles;
                console.log(' News ', this.news);
            })
            .catch(error => {
                this.error = error;
                this.news = undefined;
            });
    }
}
