
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter } from "react-router-dom";

import './App.css';
import { Carta } from './components/menu/Carta';




import Main from "./Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Carta /> */}
      <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;