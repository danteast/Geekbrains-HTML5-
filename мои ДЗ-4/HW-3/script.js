// 'use strict';
class Form {
    constructor() {
        this.name = document.querySelector('#name');
        this.regExpName = /[a-zА-Я]+\s[a-zА-Я]+\s[a-zА-Я]+/ig;
        this.tel = document.querySelector('#tel');
        this.regExpTel = /\+\d\(\d{3}\)\d{3}-\d{2}-\d{2}/g;
        this.email = document.querySelector('#email');
        this.regExpEmail = /[\w-\.]+@[a-z]+\.[a-z]+/ig;
    }

    checkForm() {
        this.checkName();
        this.checkTel();
        this.checkEmail()
    }

    checkName() {
        if (!this.name.value.match(this.regExpName)) {
            this.errorFunc(this.name, 'al1');
        } else {
            this.validFunc(this.name, 'al1');
        }
    }
    checkTel() {
        if (!this.tel.value.match(this.regExpTel)) {
            this.errorFunc(this.tel, 'al2')
        } else {
            this.validFunc(this.tel, 'al2');
        }
    }
    checkEmail() {
        if (!this.email.value.match(this.regExpEmail)) {
            this.errorFunc(this.email, 'al3')
        } else {
            this.validFunc(this.email, 'al3');
        }
    }

    errorFunc(inputName, inputId) {
        inputName.style.border = '2px solid red';
        document.getElementById(inputId).style.visibility = 'visible';
    }

    validFunc(inputName, inputId) {
        inputName.style.border = '1px solid black';
        document.getElementById(inputId).style.visibility = 'hidden';
    }

}
const formForSend = new Form();
document.querySelector('.btn').addEventListener('click', e => {
    const targ = [...e.target.classList];
    if (targ.includes('btn')) {
        formForSend.checkForm()
    }
});