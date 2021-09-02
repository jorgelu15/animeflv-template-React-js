import React, { Fragment } from "react";
import Container from "../components/Directorio/Container";
import Footer from "../components/Layouts/Footer";
import Header from "../components/Layouts/Header";

const Directorio = () => {
  return (
    <Fragment>
      <div class="wrapper-general">
        <Header />
        <Container />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Directorio;
