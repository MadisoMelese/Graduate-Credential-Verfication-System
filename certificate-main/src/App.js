import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminPage from '../src/Screen/AdminPortal/AdminPage'
import StudentPage from '../src/Screen/StudentPortal/StudentPage'
import Login from '../src/Screen/LoginPage/LoginPage'
import 'boxicons/css/boxicons.min.css';


function App() {
  return (
    <Router>
    <div className="App" >

      <Routes>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/student" element={<StudentPage/>}/>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </div>

    </Router>
  );
}

export default App;
