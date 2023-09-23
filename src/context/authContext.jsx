import React, { createContext, useState } from "react";

const authContext = createContext({
  modalState: false,
  modalStateHandler: (bolian) => {},
});

export const AuthContextProvider = (props) => {
  //! modal state or login user name state
  const [modalState, setModalState] = useState(false);

  const modalStateHandler = (bolian) => {
    setModalState(bolian);
  };
  //! User Login State Handler

  return (
    <authContext.Provider
      value={{
        modalState,
        modalStateHandler,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default authContext;
