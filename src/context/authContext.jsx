import React, { createContext, useState } from "react";

const authContext = createContext({
  modalState: true,
  loginUserName: "",
  modalStateHandler: (bolian) => {},
  setLoginUserName: (bolian) => {},
});

export const AuthContextProvider = (props) => {
  const [modalState, setModalState] = useState(true);
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
