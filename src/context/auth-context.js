import { createContext} from 'react';

// import { getAuth, RecaptchaVerifier} from "firebase/auth";

// const userAuthContext = createContext();

// export function UserAuthContextProvider({ children }) {
//   function setUpRecaptha(number) {
//     const auth = getAuth();
//    const recaptchaVerifier = window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
//    recaptchaVerifier.render();
//   }

//   return (
//     <userAuthContext.Provider
//       value={{
//         setUpRecaptha
//       }}
//     >
//       {children}
//     </userAuthContext.Provider>
//   );
// }

// export function useUserAuth() {
//   return useContext(userAuthContext);
// }


export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {}
});

