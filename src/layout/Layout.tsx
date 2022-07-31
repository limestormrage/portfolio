import React from 'react';
import { LayoutProps } from './Layout.props';
import styles from './Layout.module.scss';
import Header from './header/Header';

function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        {children}
      </main>
      <footer>
        fsdfsdf
      </footer>
    </div>
  );
}

export default Layout;
