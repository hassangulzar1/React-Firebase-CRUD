import React, { createContext, useState } from "react";
import { app } from "../firebase-config";
import {
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
  document: "",
  loadingState: false,
  setLoadingState: () => {},
});

export const AuthContextProvider = (props) => {
  //* Filtering the list States
  const [filterBy, setFilter] = useState("Name");
  const [filterInputState, setFilterInputState] = useState("");
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  // !Loading State for adding User
  const [loadingState, setLoadingState] = useState(false);
  //! modal state or login user name state
  const [modalState, setModalState] = useState(false);
  const modalStateHandler = (bolian) => {
    setModalState(bolian);
  };

  //! sending Data to fireStore
  let data = JSON.parse(localStorage.getItem("userData"));
  const db = getFirestore(app);
  const document = doc(db, "users", data.uid);

  const sendingDataHandler = async (Data) => {
    try {
      const docSnap = await getDoc(document);
      console.log(docSnap.data());

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
        document,
        setLoadingState,
        loadingState,
        //! Filtering States

        filterBy,
        setFilter,
        filterInputState,
        setFilterInputState,
        handleChange,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default authContext;
