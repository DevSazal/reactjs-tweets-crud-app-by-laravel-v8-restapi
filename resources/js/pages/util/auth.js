import Cookies from 'js-cookie';
import cookie from 'cookie';
import React from 'react';

// export const isLoggedIn = (reqCookies = null) => {
//     // if we don't have request cookies, get the cookie from client
//     if (! reqCookies) {
//       console.log("isLoggedIn.auth v1")
//         return !! Cookies.get('SPA_is_user_logged_in')
//     }
//     // otherwise get cookie from server
//     console.log("isLoggedIn.auth v2")
//     return !! cookie.parse(reqCookies).SPA_is_user_logged_in
// }

export const logIn = () => {
    Cookies.set('SPA_is_user_logged_in', true, {expires: 86400, sameSite: 'lax'});
    // console.log("redirect as logged user...");
}

export const logOut = () => {
    if (typeof window !== 'undefined') {
        // remove logged in user's cookie and redirect to login page
        Cookies.remove('SPA_is_user_logged_in', {expires: 86400, sameSite: 'lax'})
        sessionStorage.clear()
        localStorage.clear()

        console.log("redirecting by logout to login")
    }
}
