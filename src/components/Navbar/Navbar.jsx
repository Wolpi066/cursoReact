import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <img src="ruta-al-logo.png" alt="Logo" className="logo" />
        Mi Título
      </Link>
      <form className="form-inline ml-auto">
        <input className="form-control" type="search" placeholder="Buscar..." aria-label="Search" />
        <button className="btn btn-outline-primary" type="submit">Buscar</button>
      </form>
    </nav>
  );
}

export default Navbar;
