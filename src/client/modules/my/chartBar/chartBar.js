import { LightningElement, api } from 'lwc';

export default class ChartBar extends LightningElement {
    @api progress;
    
    get style() {
        return `width: ${this.progress}%`;
    }
}
