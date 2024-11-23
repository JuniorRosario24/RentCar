// src/Admin/Analisis.js
import React from "react";
import "../Css/AdminStyles.css";

const Analisis = () => {
  const analisisData = [
    {
      id: 1,
      modelo: "Toyota Corolla",
      fecha: "7/11/2024 - 11/11/2024",
      alquiladoA: "Juan P. Arias",
      img: "ruta/toyota-corolla.jpg", // Reemplazar con la URL de la imagen
    },
  ];

  return (
    <div className="admin-page">
      <h1>ADMINISTRACIÓN</h1>
      <div className="menu">
        <button className="menu-btn">LISTA DE VEHÍCULOS</button>
        <button className="menu-btn active">ANÁLISIS</button>
        <button className="menu-btn">USUARIOS</button>
        <button className="menu-btn">ECONOMÍA</button>
      </div>
      <div className="content">
        <h2>ANÁLISIS</h2>
        <div className="analisis-box">
          Aquí van a mostrar cuántos vehículos tenemos alquilados (por
          clasificación, ej: todos en general, Toyotas, Kia, etc.).
        </div>
        <div className="analisis-table">
          <table>
            <thead>
              <tr>
                <th>Vehículo</th>
                <th>Fecha</th>
                <th>Alquilado a</th>
              </tr>
            </thead>
            <tbody>
              {analisisData.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.img} alt={item.modelo} />
                    {item.modelo}
                  </td>
                  <td>{item.fecha}</td>
                  <td>{item.alquiladoA}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analisis;
