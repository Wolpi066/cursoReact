import React from "react";
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link" href="/pequeno-electro">
            Pequeño Electro
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/lavarropas">
            Lavarropas
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/coccion">
            Cocción
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/heladeras">
            Heladeras
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
