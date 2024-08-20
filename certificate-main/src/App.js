import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminPage from '../src/Screen/AdminPortal/AdminPage'
import StudentPage from '../src/Screen/StudentPortal/StudentPage'
import Header from "./Components/Header";
import Body from "../src/Components/Body/Body"
import 'boxicons/css/boxicons.min.css';


function App() {
  return (
    <Router>
    <div className="App" >
      {/* <Header /> */}
      {/* <Body> */}

      <Routes>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/student" element={<StudentPage/>}/>
      </Routes>
      {/* </Body> */}
    </div>

    </Router>
  );
}

export default App;
