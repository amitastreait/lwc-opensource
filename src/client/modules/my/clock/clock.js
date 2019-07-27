import { LightningElement, track, api } from 'lwc';

export default class Clock extends LightningElement {
    @track timestamp = new Date().toISOString();
    @track message = 'I am from Child Component';

    @api
    refreshTime(valueFromParent) {
        this.timestamp = new Date().toISOString();
        this.message =  valueFromParent;
    }
}
