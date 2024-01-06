import{ login,logout,signUp } from './userForm'
import { getWinery } from './wineryForm';

import '@babel/polyfill'

const loginForm=document.querySelector('.main-block');
const signupForm=document.querySelector('.main-block2');
const logoutForm=document.querySelector('#logout');
const formUpdate=document.getElementById('form101');
const formUpdate2=document.getElementById('form102');
if(loginForm){
document.querySelector('.main-block').addEventListener('submit',e=>{
    e.preventDefault();
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    login(email,password);

})
}
if(logoutForm){
    document.querySelector('#logout').addEventListener('click',logout)
}
if(formUpdate){
    formUpdate.addEventListener('submit',(e)=>{
        e.preventDefault();
        const form=new FormData();
        form.append('name',document.getElementById('textt').value);
        form.append('email',document.getElementById('emaill').value);
        updateUserData(form)
        document.getElementById('textt').value="";
        document.getElementById('emaill').value=""

    })
}
