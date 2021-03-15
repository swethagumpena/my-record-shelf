import React from 'react';
import styles from './NavBar.module.scss';

const NavBar = () => (
  <div className={styles.navBar}>
    <p>
      My
      {' '}
      <span className={styles.bold}>Record</span>
      {' '}
      Shelf
    </p>
  </div>
);

export default NavBar;
