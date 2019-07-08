import { LightningElement, track } from 'lwc';

export default class ApiProp extends LightningElement {
    @track percentage = 45;
    handleOnChange(event) {
        let val = event.target.value;
        if (val >= 1 && val <= 100) {
            this.percentage = val;
        } else if (val < 0) {
            this.percentage = 0;
        } else if (val > 100) {
            this.percentage = 100;
        }
    }
}
