/* eslint-disable jsx-a11y/no-static-element-interactions */
import cn from 'classnames';
import React, { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ReactComponent as LogoIcon } from '../../assets/logo/logo.svg';
import { HeaderLink } from './const';
import styles from './Header.module.scss';

function Header(): JSX.Element {
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolling(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(styles.header, {
        [styles.headerActive]: isScrolling,
      })}
    >
      <div className="container">
        <div className={styles.content}>
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
          <LogoIcon
            className={styles.logo}
            width="30px"
            height="30px"
          />
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
                    onClick={() => setOpenMenu(false)}
                  >
                    {title}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
