import React from 'react';
import { ReactComponent as PhotoshopIcon } from './photoshop.svg';
import styles from './skills.module.scss';

export function Skills(): JSX.Element {
  return (
    <section className={styles.skills}>
      <div className="container">
        <h2 className={styles.title}>Skills</h2>
        <p className={styles.description}>I work in such programs as</p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <PhotoshopIcon height="88px" width="89px" aria-hidden="true" />
            <p className={styles.itemDescription}>
              Adobe Photoshop
            </p>
          </li>
          <li className={styles.item}>
            <PhotoshopIcon height="88px" width="89px" aria-hidden="true" />
            <p className={styles.itemDescription}>
              Adobe Photoshop
            </p>
          </li>
          <li className={styles.item}>
            <PhotoshopIcon height="88px" width="89px" aria-hidden="true" />
            <p className={styles.itemDescription}>
              Adobe Photoshop
            </p>
          </li>
          <li className={styles.item}>
            <PhotoshopIcon height="88px" width="89px" aria-hidden="true" />
            <p className={styles.itemDescription}>
              Adobe Photoshop
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
