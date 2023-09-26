import React, { createContext, useCallback, useEffect, useState } from "react";
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
  const [dataTracking, setDataTracking] = useState(false);
  //! Data coming from DataBase
  let data = JSON.parse(localStorage.getItem("userData"));
  const db = getFirestore(app);
  const document = doc(db, "users", data.uid);

  // !setting empty array to firebase
  const settingEmptyArray = async () => {
    const docSnap = await getDoc(document);
    let array = [];
    if (!docSnap.exists()) {
      setDoc(document, { arrayField: array });
    }
  };
  useEffect(() => {
    settingEmptyArray();
  }, []);

  //! all Data Array
  const [dataArray, setDataArray] = useState([]);

  //! Editing Mode logic starts here
  const [editingMode, setEditingMode] = useState(false);
  const editingModeHandler = (id, index) => {
    setEditingMode(true);
  };

  //! deleting the element in the array
  const deleteListHandler = (Id) => {
    getDoc(document)
      .then(() => {
        const updatedArray = dataArray.filter((e) => Id !== e.id);
        toast.success("User Deleted Successfully");
        return updateDoc(document, { arrayField: updatedArray }).then(() =>
          setDataTracking((prevState) => !prevState)
        );
      })
      .catch((err) => {
        return toast.error(err.message);
      });
  };
  //! Filtering States
  const [filterBy, setFilter] = useState("Name");
  const [filterInputState, setFilterInputState] = useState("");
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  // !Loading State for adding User
  const [loadingState, setLoadingState] = useState(false);
  //! modal state
  const [modalState, setModalState] = useState(false);
  const modalStateHandler = (bolian) => {
    setModalState(bolian);
  };
  //! sending Data to fireStore
  const sendingDataHandler = (Data) => {
    getDoc(document)
      .then(() => {
        toast.success(`UserName:- "${Data.name}" Added Successfully`);
        return updateDoc(document, { arrayField: arrayUnion(Data) }).then(() =>
          setDataTracking((prevState) => !prevState)
        );
      })
      .catch((err) => {
        return toast.error(`Something Went Wrong ❌!!`);
      });
  };

  //! updating Array of Data
  useEffect(() => {
    getDoc(document).then((doc) => {
      setDataArray(doc.data().arrayField);
    });
  }, [dataTracking]);

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
        editingMode,
        setEditingMode,
        editingModeHandler,
        dataArray,
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
