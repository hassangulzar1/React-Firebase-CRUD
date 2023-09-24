import React, { createContext, useState } from "react";
import { app } from "../firebase-config";
import {
  arrayRemove,
  arrayUnion,
  deleteDoc,
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
  //! Data coming from DataBase
  let data = JSON.parse(localStorage.getItem("userData"));
  const db = getFirestore(app);
  const document = doc(db, "users", data.uid);

  //! deleting the element in the array
  const deleteListHandler = async (Id) => {
    const docSnap = await getDoc(document);
    const updatedArray = docSnap.data().arrayField.filter((e) => e.id !== Id);
    return updateDoc(document, { arrayField: updatedArray });
  };
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
        document,
        setLoadingState,
        loadingState,
        deleteListHandler,
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
