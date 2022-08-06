import React from 'react';
import styles from './footer.module.scss';
import { ReactComponent as LinkedInIcon } from './linked.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';
import { ReactComponent as BehanceIcon } from './behance.svg';
import { ReactComponent as SurfaceIcon } from './surface.svg';

function Footer(): JSX.Element {
  return (
    <footer className={styles.footer} id="footer">
      <div className="container">
        <h2 className={styles.title}>Contacts</h2>
        <p className={styles.description}>
          Want to know more or just chat? You are welcome!
        </p>
        <a
          className={styles.link}
          href="https://t.me/limestormrage"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          Send message
        </a>
        <ul className={styles.socials}>
          <li className={styles.social}>
            <a href="/#">
              <LinkedInIcon width="40px" height="40px" />
            </a>
          </li>
          <li className={styles.social}>
            <a href="/#">
              <InstagramIcon width="40px" height="40px" />
            </a>
          </li>
          <li className={styles.social}>
            <a href="/#">
              <BehanceIcon width="40px" height="40px" />
            </a>
          </li>
          <li className={styles.social}>
            <a href="/#">
              <SurfaceIcon width="40px" height="40px" />
            </a>
          </li>
        </ul>
        <p className={styles.subText}>
          Like me on
          {' '}
          <br />
          LinkedIn, Instagram, Behance, Dribble
        </p>
      </div>
    </footer>
  );
}

export default Footer;
