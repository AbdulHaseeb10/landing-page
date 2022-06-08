import React from "react";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h4>Expense Planner</h4>
      <div className={styles.navItem}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </div>
    </nav>
  );
};

export default Navbar;
