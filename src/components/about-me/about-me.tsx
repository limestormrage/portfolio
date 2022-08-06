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
              Hi, I&rsquo;m Denis&nbsp;&mdash; UX/UI designer from Minsk.
              I&rsquo;m&nbsp;interested&nbsp;in&nbsp;design and everything connected with&nbsp;it.
            </p>
          </li>
          <li className={styles.descriptionItem}>
            <p>
              I&rsquo;m studying at&nbsp;courses &laquo;Web&nbsp;and&nbsp;mobile design
              interfaces&raquo; in&nbsp;IT-Academy.
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
