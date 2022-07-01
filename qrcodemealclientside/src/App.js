import React from "react";
import Menu from './Views/main_menu/main_menu'


//import css
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
    <div style={{backgroundColor:"#7D141E"}} className="App">
      <div className="app-nested">
        <Menu />
      </div>
      <div className="null-box">
        mughees
      </div>
    </div>
  );
}

export default App;
