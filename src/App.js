import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './component/Navbar';
import Achieve from './component/Achieve';
import Admin from './component/Admin';
import Adm from './component/Adm';
import Faculty from './component/Faculty';
import Fac from './component/Fac';
import Student from './component/Student';
import Stud from './component/Stud';
import Hom from './component/Hom';

const LayoutWithNavbar = ({ children }) => (
  <>
    <Navbar />
    
    <main>{children}</main>
  </>
);

const LayoutWithoutNavbar = ({ children }) => <main>{children}</main>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutWithNavbar><Hom /></LayoutWithNavbar>} />
        <Route path="/achieve" element={<LayoutWithNavbar><Achieve /></LayoutWithNavbar>} />
        <Route path="/admin" element={<LayoutWithNavbar><Admin /></LayoutWithNavbar>} />
        <Route path="/adm" element={<LayoutWithoutNavbar><Adm /></LayoutWithoutNavbar>} />
        <Route path="/faculty" element={<LayoutWithNavbar><Faculty /></LayoutWithNavbar>} />
        <Route path="/fac" element={<LayoutWithoutNavbar><Fac /></LayoutWithoutNavbar>} />
        
        
        <Route path="/student" element={<LayoutWithNavbar><Student /></LayoutWithNavbar>} />
        <Route path="/stud" element={<LayoutWithoutNavbar><Stud /></LayoutWithoutNavbar>} />
        
        <Route path="*" element={<Link to="/" />}/>
      </Routes>
    </Router>
  );
}

export default App;
