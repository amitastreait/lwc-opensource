import { LightningElement } from 'lwc';

export default class ApiFunction extends LightningElement {
    
    refreshTime() {
        this.template.querySelector('my-clock').refreshTime(this.generate_random_string(10));
    }

    generate_random_string(string_length) {
        let random_string = '';
        let random_ascii;
        for (let i = 0; i < string_length; i++) {
            random_ascii = Math.floor(Math.random() * 25 + 97);
            random_string += String.fromCharCode(random_ascii);
        }
        return random_string;
    }
}
