import { LightningElement } from 'lwc';

export default class ApiFunction extends LightningElement {
    refreshTime() {
        this.template.querySelector('my-clock').refreshTime();
    }
}
