import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';

function Header() {

  return (
    <section className={s.header}>
      <img src="/Logo (1).svg" alt="Logo" className={s.logo}/>
      <div className={s.links}>
        <Link to="/Simular">
          <button className={s.button}>Volver</button>
        </Link>
      </div>
    </section>
  );
}

export default Header;