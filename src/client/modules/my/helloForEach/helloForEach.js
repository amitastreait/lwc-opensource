import { LightningElement, track } from 'lwc';
import { contacts } from '../../data/contacts/contacts';

export default class HelloForEach extends LightningElement {
    @track records = contacts;
}
