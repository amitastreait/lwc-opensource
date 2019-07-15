/* eslint-disable no-console */
// eslint-disable-next-line no-console
// eslint-disable-next-line no-useless-return
import { LightningElement , api, track} from 'lwc';

export default class Form extends LightningElement{
    
    @track _isRendered = false;
    @api students = [];
    @api student = {
        Id : this.generate_random_string(5),
        firstName : '',
        lastName : '',
        email : '',
        title : ''
    }
    renderedCallback() {
        if (this._isRendered) return;
        this._isRendered = true;
    }

    handleOnChange(event){
        let name = event.target.name;
        let val = event.target.value;
        this.student[name] = val;
    }

    submitForm(event){
        event.preventDefault();
        this.students.push(this.student);
        this.student = {
            Id : this.generate_random_string(5),
            firstName : '',
            lastName : '',
            email : '',
            title : ''
        }
    }

    generate_random_string(string_length){
        let random_string = '';
        let random_ascii;
        for(let i = 0; i < string_length; i++) {
            random_ascii = Math.floor((Math.random() * 25) + 97);
            random_string += String.fromCharCode(random_ascii)
        }
        return random_string
    }

}