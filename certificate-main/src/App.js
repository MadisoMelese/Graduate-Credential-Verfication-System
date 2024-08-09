import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminPage from '../src/Screen/AdminPortal/AdminPage'
import StudentPage from '../src/Screen/StudentPortal/StudentPage'
import Header from "./Components/Header";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />

      <Routes>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/student" element={<StudentPage/>}/>
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
