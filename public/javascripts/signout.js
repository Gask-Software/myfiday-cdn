import {
    auth,
} from "./utils.js";

const menulol = document.querySelector('#menulogout');
const menulol2 = document.querySelector('#menulol2');

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
    // if (signOutButton) {
    //     console.log("LEGGOOO");
    //     signOutButton.addEventListener('click', click_handler1, false);
    // } else {
    //     console.log("DEAD KO");
    // }
    console.log("LOGOGOGOG");
    // menulol.addEventListener('click', click_handler1, false);
    menulol.addEventListener('click', signout);
    menulol2.addEventListener('click', signout);
});