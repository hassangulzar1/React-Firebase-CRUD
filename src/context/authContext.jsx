import React, { createContext, useState } from "react";
import { app } from "../firebase-config";
import {
  addDoc,
  arrayUnion,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
const authContext = createContext({
  modalState: false,
  modalStateHandler: (bolian) => {},
  sendingDataHandler: (data) => {},
});

export const AuthContextProvider = (props) => {
  //! modal state or login user name state
  const [modalState, setModalState] = useState(false);
  // const [dataState, setDataState] = useState([]);

  const modalStateHandler = (bolian) => {
    setModalState(bolian);
  };
  //! sending Data to fireStore
  const sendingDataHandler = async (Data) => {
    console.log(Data);
    const db = getFirestore(app);
    try {
      let data = JSON.parse(localStorage.getItem("userData"));
      await updateDoc(doc(db, "users", data.uid), {
        arrayField: arrayUnion(Data),
      });
    } catch (err) {
      alert("Error: " + err);
    }
  };
  return (
    <authContext.Provider
      value={{
        modalState,
        modalStateHandler,
        sendingDataHandler,
        // setDataState,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default authContext;
