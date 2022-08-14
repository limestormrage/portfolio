import React from 'react';
import { ReactComponent as JSIcon } from './js.svg';
import { ReactComponent as ReactIcon } from './react.svg';
import { ReactComponent as HtmlIcon } from './html.svg';
import { ReactComponent as CssIcon } from './css.svg';
import styles from './skills.module.scss';

export function Skills(): JSX.Element {
  return (
    <section className={styles.skills} id="skills">
      <div className="container">
        <h2 className={styles.title}>Skills</h2>
        <p className={styles.description}>The main technology stack</p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <ReactIcon height="88px" width="89px" aria-hidden="true" />
            <p className={styles.itemDescription}>
              React
            </p>
          </li>
          <li className={styles.item}>
            <JSIcon height="88px" width="89px" aria-hidden="true" />
            <p className={styles.itemDescription}>
              JavaScript
            </p>
          </li>
          <li className={styles.item}>
            <HtmlIcon height="88px" width="89px" aria-hidden="true" />
            <p className={styles.itemDescription}>
              HTML
            </p>
          </li>
          <li className={styles.item}>
            <CssIcon height="88px" width="89px" aria-hidden="true" />
            <p className={styles.itemDescription}>
              CSS
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
