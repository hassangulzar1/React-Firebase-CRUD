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
import { toast } from "react-toastify";

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
  let data = JSON.parse(localStorage.getItem("userData"));

  //! sending Data to fireStore
  const db = getFirestore(app);
  const document = doc(db, "users", data.uid);

  const sendingDataHandler = async (Data) => {
    try {
      const docSnap = await getDoc(document);
      if (docSnap.exists()) {
        toast.success(`UserName:- "${Data.name}" Added Successfully `, {
          icon: "🚀",
        });

        return updateDoc(document, { arrayField: arrayUnion(Data) });
      } else {
        toast.success(`UserName:- "${Data.name}" Added Successfully `, {
          icon: "🚀",
        });
        return setDoc(document, { arrayField: [Data] });
      }
    } catch (err) {
      return toast.error(`Something Went Wrong ❌!!`, {
        icon: "❌",
      });
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
