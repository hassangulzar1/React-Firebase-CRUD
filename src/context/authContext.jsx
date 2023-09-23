import React, { createContext, useState } from "react";
import { app } from "../firebase-config";
import {
  addDoc,
  arrayUnion,
  getDoc,
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
    const db = getFirestore(app);
    try {
      let data = JSON.parse(localStorage.getItem("userData"));

      const document = doc(db, "users", data.uid);
      const docSnap = await getDoc(document);

      if (docSnap.exists()) {
        return updateDoc(document, { arrayField: arrayUnion(Data) });
      } else {
        return setDoc(document, { arrayField: [Data] });
      }
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
