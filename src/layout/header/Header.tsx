/* eslint-disable jsx-a11y/no-static-element-interactions */
import cn from 'classnames';
import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { HeaderLink } from './const';
import styles from './Header.module.scss';

function Header(): JSX.Element {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <button
          type="button"
          onClick={() => setOpenMenu(!openMenu)}
          className={cn(styles.btnMenu, {
            [styles.burger]: !openMenu,
            [styles.btnClose]: openMenu,
          })}
        >
          <span />
        </button>
        <nav className={cn(styles.nav, {
          [styles.navOpen]: openMenu,
        })}
        >
          <ul className={styles.navList}>
            {Object.values(HeaderLink).map(({ title, link }) => (
              <li
                className={styles.navItem}
                key={title}
              >
                <AnchorLink
                  href={link}
                  className={styles.navLink}
                >
                  {title}
                </AnchorLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
