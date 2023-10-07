import React from 'react';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src="ruta-al-logo.png" alt="Logo" className="logo" />
        Mi Título
      </a>
      <form className="form-inline ml-auto">
        <input className="form-control" type="search" placeholder="Buscar..." aria-label="Search" />
        <button className="btn btn-outline-primary" type="submit">Buscar</button>
      </form>
    </nav>
  );
}

export default Navbar;
