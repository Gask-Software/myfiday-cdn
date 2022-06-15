import {
    auth,
} from "./utils.js";

const signOutButton = document.querySelector('#menuSignOutButton');

console.log("IS THIS EVEN LOADING?");

const signout = () => {
    console.log("HELLO LOGOUT PLEASE");
    auth.signOut();
    window.location.replace('./');
}

window.addEventListener('load', function () {
    console.log("LOADED");
    if (signOutButton) {
        console.log("LEGGOOO");
        signOutButton.addEventListener('click', signout);
    } else {
        console.log("DEAD KO");
    }
});