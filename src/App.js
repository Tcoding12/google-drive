import React, { useEffect } from "react";
import styled from "styled-components";
import Drive from "./Component/Drive";
import Header from "./Component/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SiderBar from "./Component/SiderBar";
import Model from "./Component/Model";
import Stuff from "./Component/Stuff";
import FolderModel from "./Component/FolderModel";
import Login from "./Component/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectName, setLogin, setLogOut } from "./Slices/user/userSlice";
import PhotoDisplay from "./Component/PhotoDisplay";
import Folder from "./Component/Folder";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectName);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setLogin({
            name: user.displayName,
            uid: user.uid,
            email: user.email,
            photo: user.photoURL,
          })
        );
      } else {
        dispatch(
          setLogOut({
            name: null,
            email: null,
            uid: null,
            photo: null,
          })
        );
      }
    });
  });

  return (
    <Router>
      <Header />
      {user ? (
        <>
          <Container>
            <SiderBar />
            <Routes>
              <Route path="/" element={<Drive />} />
              <Route path="/folder/:name/:id" element={<Folder />} />
            </Routes>
          </Container>
          <Stuff />
          <Model />
          <PhotoDisplay />
          <FolderModel />
        </>
      ) : (
        <Login />
      )}
    </Router>
  );
}

export default App;

const Container = styled.div`
  display: flex;
`;
