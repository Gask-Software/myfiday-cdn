import {
    auth,
} from "./utils.js";

const menulogout = document.querySelector('#menulogout');
// TODO: REMOVE
const menulol2 = document.querySelector('#menulol2');

const signout = () => {
    auth.signOut();
    window.location.replace('./');
}

window.addEventListener('load', function () {
    if (menulogout) {
        menulogout.addEventListener('click', signout);
    }
    // TODO: REMOVE
    if (menulol2) {
        menulol2.addEventListener('click', signout);
    }
});