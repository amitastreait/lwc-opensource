import { LightningElement, api } from 'lwc';

export default class HelloWorld extends LightningElement {
    @api greet = 'Welcome ';
    @api message = 'to LWC Local Development';
    @api user = 'Amit';

    get welcomeMesage() {
        return this.greet + ' ' + this.user + ' ' + this.message;
    }

    handleOnChange(event) {
        let val = event.target.value;

        this.user = val;
    }
}
