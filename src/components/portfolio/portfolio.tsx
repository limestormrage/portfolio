import React from 'react';
import GuitarShop from '../../assets/projects/guitar-shop.jpg';
import SixCities from '../../assets/projects/six-cities.jpg';
import BigTrip from '../../assets/projects/big-trip.jpg';
import Keksobooking from '../../assets/projects/keksobooking.jpg';
import styles from './portfolio.module.scss';

export function Portfolio(): JSX.Element {
  return (
    <section className={styles.portfolio} id="portfolio">
      <div className="container">
        <h2 className={styles.title}>Portfolio</h2>
        <ul className={styles.portfolioList}>
          <li className={styles.portfolioItem}>
            <img
              src={GuitarShop}
              width="936px"
              height="522px"
              alt="Онлайн магазан Guitar Shop"
            />
            <a
              href="https://accelerator-react-starter-pack-limestormrage.vercel.app/catalog"
              target="_blank"
              className={styles.link}
              rel="nofollow noopener noreferrer"
            >
              Guitar-Shop
            </a>
          </li>
          <li className={styles.portfolioItem}>
            <img
              src={SixCities}
              width="936px"
              height="522px"
              alt="Проект Six Cities"
            />
            <a
              href="https://six-cities-ixqmuy35l-limestormrage.vercel.app"
              target="_blank"
              className={styles.link}
              rel="nofollow noopener noreferrer"
            >
              Six-Cities
            </a>
          </li>
          <li className={styles.portfolioItem}>
            <img
              src={BigTrip}
              width="936px"
              height="522px"
              alt="Проект Big-Trip"
            />
            <a
              href="https://big-trip-rnpw2syoz-limestormrage.vercel.app"
              target="_blank"
              className={styles.link}
              rel="nofollow noopener noreferrer"
            >
              Big-Trip
            </a>
          </li>
          <li className={styles.portfolioItem}>
            <img
              src={Keksobooking}
              width="936px"
              height="522px"
              alt="Проект Big-Trip"
            />
            <a
              href="https://keksobooking-limestormrage.vercel.app"
              target="_blank"
              className={styles.link}
              rel="nofollow noopener noreferrer"
            >
              Keeksobooking
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
