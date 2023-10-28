// En ItemListContainer.js
import React from 'react';
import { Link } from 'react-router-dom';

const ItemListContainer = () => {
return (
    <div>
    <h2>Lista de Elementos</h2>
    <ul>
        <li>
          <Link to="/item/1">Ver detalles del Elemento 1</Link> {/* Enlace a detalles de un elemento */}
        </li>
        <li>
          <Link to="/item/2">Ver detalles del Elemento 2</Link> {/* Enlace a detalles de otro elemento */}
        </li>
        <li>
          <Link to="/category/1">Ver más de Categoría 1</Link> {/* Enlace a más elementos de una categoría */}
        </li>
        <li>
          <Link to="/category/2">Ver más de Categoría 2</Link> {/* Enlace a más elementos de otra categoría */}
        </li>
    </ul>
    </div>
);
}

export default ItemListContainer;
