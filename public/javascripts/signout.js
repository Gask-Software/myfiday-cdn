import {
    auth,
} from "./utils.js";

const signOutButton = document.querySelector('#menuSignOutButton');
const menulol = document.querySelector('#menulol');

console.log("IS THIS EVEN LOADING?");

const signout = () => {
    console.log("HELLO LOGOUT PLEASE");
    auth.signOut();
    window.location.replace('./');
}

function click_handler1() {
    alert("click_handler1");
}

window.addEventListener('load', function () {
    console.log("LOADED");
    if (signOutButton) {
        console.log("LEGGOOO");
        signOutButton.addEventListener('click', signout);
        signOutButton.addEventListener('click', click_handler1, false);
    } else {
        console.log("DEAD KO");
    }
    console.log("LOGOGOGOG");
    menulol.addEventListener('click', click_handler1, false);
});