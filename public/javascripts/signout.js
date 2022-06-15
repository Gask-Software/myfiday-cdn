import {
    auth,
} from "./utils.js";

const signOutButton = document.querySelector('#menuSignOutButton');

const signout = () => {
    auth.signOut();
}

signOutButton.addEventListener('click', signout);