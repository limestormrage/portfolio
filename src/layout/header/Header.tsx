import React from 'react';
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
                <a
                  href={link}
                  className={styles.navLink}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
