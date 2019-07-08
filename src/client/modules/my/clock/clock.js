import { LightningElement, track, api } from 'lwc';

export default class Clock extends LightningElement {
    @track timestamp = new Date().toISOString();

    @api
    refreshTime() {
        this.timestamp = new Date().toISOString();
    }
}
