import React from 'react';
import styles from './about-me.module.scss';

export function AboutMe(): JSX.Element {
  return (
    <section className={styles.about} id="about-me">
      <div className="container">
        <h2 className={styles.title}>About me</h2>
        <ul className={styles.descriptionList}>
          <li className={styles.descriptionItem}>
            <p className={styles.description}>
              Hi, I&rsquo;m Dmitry&nbsp;&mdash; frontend developer from Petrozavodsk.
              I&nbsp;am interested in&nbsp;the frontend and everything related to&nbsp;it
            </p>
          </li>
          <li className={styles.descriptionItem}>
            <p>
              I&nbsp;have completed the &laquo;React developer&raquo; courses from the HTML Academy
            </p>
          </li>
          <li className={styles.descriptionItem}>
            <p>
              Ready to&nbsp;implement excellent projects with&nbsp;wonderful&nbsp;people.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
