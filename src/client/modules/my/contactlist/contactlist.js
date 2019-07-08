import { LightningElement, api, track } from 'lwc';
import { contacts } from '../../data/contacts/contacts';

export default class ContactList extends LightningElement {
    @api contacts = contacts;
    @track selectedContact;

    handleSelect(event) {
        const contactId = event.detail;
        this.selectedContact = this.contacts.find(
            contact => contact.Id === contactId
        );
    }
}
