import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import './components/Navbar/Navbar.css';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import './components/Sidebar/Sidebar.css';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  )
}

export default App;
