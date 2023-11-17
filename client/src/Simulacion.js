import React from 'react';
import { useParams } from 'react-router-dom';
import s from './Simulacion.module.css';
import Header from './components/Header/Header';

function Simulacion() {

  const { nombres, apellidos, telefono, email, monto, cuotas, interes, valorCuota } = useParams();

  return (
    <>
    <Header />
    <article className={s.wrapper}>
      <h1>Simulación del préstamo</h1>
      <div className={s.box}>
      <div className={s.table}>
        <div className={s.infos}>
          <div className={s.info}>
            <text className={s.rotulo}>Nombres:</text>
            <span>{nombres}</span>
          </div>
          <div className={s.info}>
            <tex className={s.rotulo}>Teléfono:</tex>
            <text>{telefono}</text>
          </div>
          <div className={s.info}>
            <tex className={s.rotulo}>Monto en UF:</tex>
            <text>{monto}</text>
          </div>
          <div className={s.info}>
            <tex className={s.rotulo}>Tasa de interés:</tex>
            <text>{interes}</text>
          </div>
        </div>
        <div className={s.infos}>
          <div className={s.info}>
            <text className={s.rotulo}>Apellidos:</text>
            <text>{apellidos}</text>
          </div>
          <div className={s.info}>
            <tex className={s.rotulo}>Email:</tex>
            <text>{email}</text>
          </div>
          <div className={s.info}>
            <tex className={s.rotulo}>Valor de la cuota en UF:</tex>
            <text>{valorCuota}</text>
          </div>
          <div className={s.info}>
            <tex className={s.rotulo}>Cantidad de cuotas:</tex>
            <text>{cuotas}</text>
          </div>
        </div>
      </div>
      <div className={s.buttons}>
        <button className={s.button}>Volver</button>
        <button className={s.button}>Descargar</button>
      </div>
      </div>
    </article>
    </>

  );
}

export default Simulacion;