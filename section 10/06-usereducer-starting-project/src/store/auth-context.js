import { createContext, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  loginHandler: () => {},
  logoutHandler: (email, password) => {},
});

const AuthContextProvider = ({ childern }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, loginHandler, logoutHandler }}>
      {childern}
    </AuthContext.Provider>
  );
};

export default AuthContext;
