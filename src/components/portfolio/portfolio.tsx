import React from 'react';
import { Link } from 'react-router-dom';
import styles from './portfolio.module.scss';

export function Portfolio(): JSX.Element {
  return (
    <section className={styles.portfolio}>
      <div className="container">
        <h2 className={styles.title}>Portfolio</h2>
        <ul className={styles.portfolioList}>
          <li className={styles.portfolioItem}>
            <img src="img/projects/project-1.jpg" alt="Проект 1" />
            <Link
              to="/#"
              className={styles.link}
            >
              Online fashion store - Homepage
            </Link>
          </li>
          <li className={styles.portfolioItem}>
            <img src="img/projects/project-2.jpg" alt="Проект 2" />
            <Link
              to="/#"
              className={styles.link}
            >
              Reebok Store - Concept
            </Link>
          </li>
          <li className={styles.portfolioItem}>
            <img src="img/projects/project-3.jpg" alt="Проект 3" />
            <Link
              to="/#"
              className={styles.link}
            >
              Braun Landing Page - Concept
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
