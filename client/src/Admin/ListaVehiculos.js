// src/Admin/ListaVehiculos.js
import React from "react";
import "../Css/AdminStyles.css";

const ListaVehiculos = () => {
  const vehiculos = [
    {
      id: 1,
      modelo: "Toyota Corolla",
      img: "ruta/toyota-corolla.jpg", // Reemplazar con la URL de la imagen
    },
  ];

  return (
    <div className="admin-page">
      <h1>ADMINISTRACIÓN</h1>
      <div className="menu">
        <button className="menu-btn active">LISTA DE VEHÍCULOS</button>
        <button className="menu-btn">ANÁLISIS</button>
        <button className="menu-btn">USUARIOS</button>
        <button className="menu-btn">ECONOMÍA</button>
      </div>
      <div className="content">
        <h2>LISTA DE VEHÍCULOS</h2>
        <button className="add-btn">AGREGAR</button>
        <div className="vehiculos-list">
          {vehiculos.map((vehiculo) => (
            <div key={vehiculo.id} className="vehiculo-card">
              <img src={vehiculo.img} alt={vehiculo.modelo} />
              <p>{vehiculo.modelo}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListaVehiculos;
