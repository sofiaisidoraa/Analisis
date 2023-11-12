import React from 'react';
import { Link } from 'react-router-dom';
import s from './Simular.module.css';

function Simular() {

  return (
    <div className={s.App}>
      <header className={s.header}>
        <img src="/LaClave (1).png" alt="Loco" className={s.logo} />
        <button className={s.button}>Volver</button>
      </header>
        <div className={s.wrapper}>
          <div className={s.box}>
            <div className={s.boxInfo}>
            <h1 className={s.title}>Información de la solicitud</h1>
            <h2 className={s.title}>Información personal</h2>
            <div className={s.infos}>
              <div className={s.info}>
                <label>Nombres</label>
                <input className={s.input} type="text" placeholder="ej: María José"/>
              </div>
              <div className={s.info}>
                <label>Apellidos</label>
                <input className={s.input} type="text" placeholder="ej: González Torres"/>
              </div>
            </div>
            {/* Termine un div */}
            <div className={s.infos}>
              <div className={s.info}>
                <label>Teléfono</label>
                <input className={s.input} type="text" placeholder="ej: +56 9 1234 5678"/>
              </div>
              <div className={s.info}>
                <label>Email</label>
                <input className={s.input} type="text" placeholder="ej: mariagonzalez@example.com"/>
              </div>
            </div>
            {/* Termina otro div */}
            <h2 className={s.title}>Datos del préstamo</h2>
            <div className={s.infos}>
              <div className={s.info}>
                <label>Monto del préstamo en UF</label>
                <input className={s.input} type="text" placeholder="ej: 1000"/>
              </div>
              <div className={s.info}>
                <label>Cantidad de cuotas</label>
                <input className={s.input} type="text" placeholder="ej: 12"/>
              </div>
            </div>
            {/* Termina otro div */}
            <div className={s.infos}>
              <div className={s.info}>
                <label>Tasa de interés en UF</label>
                <input className={s.input} type="text" placeholder="ej: 5%"/>
              </div>
              <div className={s.info}>
                <label>Fecha de inicio</label>
                <input className={s.input} type="text" placeholder="ej: 12/10/2023"/>
              </div>
            </div>
            </div>
            <Link to="/Simulacion">
              <button className={s.button}>Simular
              </button>
            </Link>
            </div>
          </div>    
    </div>

  );
}

export default Simular;