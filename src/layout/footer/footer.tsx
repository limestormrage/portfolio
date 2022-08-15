import React from 'react';
import styles from './footer.module.scss';
import { ReactComponent as GitHubIcon } from './github.svg';
import { ReactComponent as VkIcon } from './vk.svg';
import { ReactComponent as HabrCareerIcon } from './habr-career.svg';
import { ReactComponent as EmailIcon } from './email.svg';

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
            <a
              href="https://github.com/limestormrage"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <GitHubIcon
                className={styles.socialIcon}
                width="40px"
                height="40px"
              />
            </a>
          </li>
          <li className={styles.social}>
            <a
              href="https://vk.com/limestormrage"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <VkIcon
                className={styles.socialIcon}
                width="40px"
                height="40px"
              />
            </a>
          </li>
          <li className={styles.social}>
            <a
              href="https://career.habr.com/limestormrage"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <HabrCareerIcon
                className={styles.socialIcon}
                width="40px"
                height="40px"
              />
            </a>
          </li>
          <li className={styles.social}>
            <a
              href="mailto:dimarik-tixonov@yandex.ru"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <EmailIcon
                className={styles.socialIcon}
                width="40px"
                height="40px"
              />
            </a>
          </li>
        </ul>
        <p className={styles.subText}>
          Like me on
          {' '}
          <br />
          GitHub, VK, Habr Career
        </p>
      </div>
    </footer>
  );
}

export default Footer;
