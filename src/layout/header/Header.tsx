import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderLink } from './const';
import styles from './Header.module.scss';

function Header(): JSX.Element {
  return (
    <header>
      <div className="container">
        <nav>
          <ul className={styles.navList}>
            {Object.values(HeaderLink).map(({ title, link }) => (
              <li
                key={title}
              >
                <Link
                  to={link}
                  className={styles.navLink}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
