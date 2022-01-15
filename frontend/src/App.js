import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AppNavbar from "./components/navbar/AppNavbar";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Todos from "./components/todos/Todos";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Container>
          <AppNavbar></AppNavbar>
          <Routes>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
            <Route path="/signin" element={<SignIn></SignIn>}></Route>
            <Route path="/" element={<Todos></Todos>}></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
