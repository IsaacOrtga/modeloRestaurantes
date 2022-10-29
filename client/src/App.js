
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter } from "react-router-dom";

import './App.css';
import MyComponent from './components/calendar/Calendar';



import Main from "./Main";

function App() {
  return (
    <div className="App">
<MyComponent />
  

      {/* <BrowserRouter>
        <Main />
      </BrowserRouter> */}
    </div>
  );
}

export default App;