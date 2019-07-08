import { LightningElement, api, track } from 'lwc';
import { formatPhoneNumber } from './phoneUtil';

export default class Output extends LightningElement {
    @api currencyCode;
    @api dateType;
    @api label;
    @api type = 'text';

    @api
    set value(val) {
        this.valuePrivate = val;
    }
    get value() {
        return this.valuePrivate;
    }

    @track dateTimeValue;
    @track valuePrivate;

    @track moment;
    @track _value;

    get isDateTime() {
        return this.type === 'datetime';
    }

    get isEmail() {
        return this.type === 'email';
    }

    get isNumber() {
        return this.type === 'number';
    }

    get isPhonenumber() {
        return this.type === 'phone';
    }

    get isText() {
        return this.type === 'text';
    }
    get formattedNumber() {
        if (this.valuePrivate) {
            return `${this.currencyCode} ${parseFloat(
                this.valuePrivate
            ).toFixed(2)}`;
        }
        return ' - ';
    }

    get formattedPhonenumber() {
        return formatPhoneNumber(this.value);
    }

    get hrefPhonenumber() {
        return `tel:${this.value}`;
    }

    get hrefEmail() {
        return `mailto:${this.value}`;
    }
}
