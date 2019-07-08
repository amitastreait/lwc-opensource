/* eslint-disable no-console */
import { LightningElement, track } from 'lwc';
//import Greeting from '../greeting/greeting';

export default class App extends LightningElement {
    @track demo = 'Welcome to LWC Local Development';
    @track navItem = 'isHello';
    _isRendered = false;
    @track navMenu = {
        isHello: true,
        isdynamic: false,
        isParent: false,
        isChild: false,
        isMisc: false
    };
    renderedCallback() {
        if (this._isRendered) return;
        this._isRendered = true;
        this.template
            .querySelector(`a[data-item="${this.navItem}"]`)
            .classList.add('active');
    }
    navItemsSelected(event) {
        event.preventDefault();
        const tabOld = this.template.querySelector(
            `a[data-item="${this.navItem}"]`
        );
        const choice = event.currentTarget.dataset.item;

        const tabNew = this.template.querySelector(`a[data-item="${choice}"]`);
        tabOld.classList.remove('active');
        tabNew.classList.add('active');
        this.navMenu[this.navItem] = false;
        this.navMenu[choice] = true;
        this.navItem = choice;
    }
}
