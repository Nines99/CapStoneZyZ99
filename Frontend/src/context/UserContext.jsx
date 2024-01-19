import { useState, useContext, createContext } from "react";
import { useCookies } from 'react-cookie'

const UserContext = createContext();

export const UserProvider = (props) => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
    console.log(cookies);
  const [currentUser, setCurrentUser] = useState(cookies.user ? cookies.user : {});

  const handleUpdateUser = (user) => {
    if (user.Email) {
      setCookie('user', JSON.stringify(user), { path: '/', maxAge: 60 * 60 * 24 })
      // cookie will expire in 24 hours
      // localStorage.setItem('user', JSON.stringify(user)); // alternative to cookies using localStorage
  } else {
      removeCookie('user')
      // localStorage.removeItem('user'); // alternative to cookies using localStorage
  }        
    setCurrentUser(user);
  };

  return (
    <UserContext.Provider value={{ currentUser, handleUpdateUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
