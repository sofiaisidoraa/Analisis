import React from 'react';
import s from './Simulacion.module.css';

function Simular() {

  return (
    <article className={s.wrapper}>
      <h1>Simulación del préstamo</h1>
      <div className={s.box}>
      <div className={s.table}>
        <div className={s.infos}>
          <div className={s.info}>
            <text className={s.rotulo}>Nombres:</text>
            <text>María José</text>
          </div>
          <div className={s.info}>
            <tex className={s.rotulo}>Teléfono:</tex>
            <text>+56 9 1234 5678</text>
          </div>
          <div className={s.info}>
            <tex className={s.rotulo}>Monto en UF:</tex>
            <text>1000</text>
          </div>
          <div className={s.info}>
            <tex className={s.rotulo}>Tasa de interés:</tex>
            <text>5%</text>
          </div>
        </div>
        <div className={s.infos}>
          <div className={s.info}>
            <text className={s.rotulo}>Apellidos:</text>
            <text>Gonzalez Torres</text>
          </div>
          <div className={s.info}>
            <tex className={s.rotulo}>Email:</tex>
            <text>mariagonzalez@example.com</text>
          </div>
          <div className={s.info}>
            <tex className={s.rotulo}>Monto en UF:</tex>
            <text>1000</text>
          </div>
          <div className={s.info}>
            <tex className={s.rotulo}>Tasa de interés:</tex>
            <text>5%</text>
          </div>
        </div>
      </div>
      <div className={s.buttons}>
        <button className={s.button}>Volver</button>
        <button className={s.button}>Descargar</button>
      </div>
      </div>
    </article>

  );
}

export default Simular;