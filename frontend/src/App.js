import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
      <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} autoClose={3000} />
    </>
  );
};

export default App;
