import React, { createContext, useState } from "react";

const authContext = createContext({
  modalState: false,
  loginUserName: "",
  modalStateHandler: (bolian) => {},
  setLoginUserName: (bolian) => {},
});

export const AuthContextProvider = (props) => {
  const [modalState, setModalState] = useState(false);
  const [loginUserName, setLoginUserName] = useState("");

  const modalStateHandler = (bolian) => {
    setModalState(bolian);
  };
  return (
    <authContext.Provider
      value={{ modalState, modalStateHandler, loginUserName, setLoginUserName }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default authContext;
