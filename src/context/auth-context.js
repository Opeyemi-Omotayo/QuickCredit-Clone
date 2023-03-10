import { createContext } from 'react';

import { getAuth, RecaptchaVerifier } from "firebase/auth";

export const setUpRecaptcha =(number) => {
  const auth = getAuth();
   const recaptchaVerifier = window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
   recaptchaVerifier.render();
}


export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {}
});

