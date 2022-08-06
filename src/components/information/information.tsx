import React from 'react';
import styles from './information.module.scss';

export function Information(): JSX.Element {
  return (
    <section className={styles.information} id="information">
      <div className="container">
        <div className={styles.about}>
          <h2 className={styles.name}>Denis Novik</h2>
          <p className={styles.description}>
            UX | UI designer
            24&nbsp;years old, Minsk
          </p>
          <div className={styles.buttons}>
            <button className={styles.button} type="button">RU</button>
            <div className={styles.separation} />
            <button className={styles.button} type="button">ENG</button>
          </div>
        </div>
        <img
          className={styles.img}
          src="img/developer/frontender.jpg"
          width="944px"
          height="387px"
          alt="Разработчик"
        />
      </div>
    </section>
  );
}
