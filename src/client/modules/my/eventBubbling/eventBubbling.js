import { LightningElement, api, track } from 'lwc';
import { contacts } from '../../data/contacts/contacts';

export default class EventBubbling extends LightningElement {
    @api contacts = contacts;
    @track selectedContact;

    handleSelect(event) {
        //const contactId = event.detail;
        /* eslint-disable no-console */
        console.log(' Demo ');
        this.selectedContact = event.target.contact;
    }
}
