/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "styles/header.module.css";
import logo from "assets/images/logo-bg.png";
import Account from "./Account";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <header className={` ${styles.header}`}>
      <div className="container">
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to="/">
                <div className={styles.brand}>
                  <h3>Car Listin App</h3>
                </div>
              </Link>
            </li>
          </ul>
          <Account />
        </nav>
      </div>
    </header>
  );
};

export default Nav;
