import React from "react";
import Project from "./Project";
import Header from "./Header"
import Contact from './Contact'
import "../styles/project.scss";

const App = () => {
  return (
    <>
      <Header />

      <Project />
      <Contact />
    </>
  );
};

export default App;
