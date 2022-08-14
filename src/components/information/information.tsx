import React from 'react';
import developerMob from '../../assets/developer/frontender-mobile.jpg';
import developer from '../../assets/developer/frontender.jpg';
import styles from './information.module.scss';

export function Information(): JSX.Element {
  return (
    <section className={styles.information} id="information">
      <div className="container">
        <div className={styles.about}>
          <h2 className={styles.name}>Dmitry Tikhonov</h2>
          <p className={styles.description}>
            Frontend developer
            28&nbsp;years&nbsp;old, Petrozavodsk
          </p>
          <div className={styles.buttons}>
            <button className={styles.button} type="button">RU</button>
            <div className={styles.separation} />
            <button className={styles.button} type="button">ENG</button>
          </div>
        </div>
        <picture>
          <source media="(max-width: 767px)" srcSet={developerMob} />
          <img
            className={styles.img}
            src={developer}
            width="944px"
            height="387px"
            alt="Разработчик"
          />
        </picture>
      </div>
    </section>
  );
}
