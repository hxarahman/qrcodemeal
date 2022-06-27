import React from "react";
import Welcome from "./Views/welcome"

//import css
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
    <div style={{backgroundColor:"#7D141E"}} className="App">
      <div className="app-nested">
        <Welcome />
      </div>
      <div className="null-box">
        mughees
      </div>
    </div>
  );
}

export default App;
