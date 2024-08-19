/* import { useState } from "react"; */

import "./App.css";
import "./Styles/style.css";

import Form from "./Components/form";
import Resume from "./Components/resume";

function App() {
  return (
    <>
      <div id="big-container">
        <div id="left-container">
          <Form></Form>
        </div>
        <div id="right-container">
          <Resume></Resume>
        </div>
      </div>
    </>
  );
}
export default App;
