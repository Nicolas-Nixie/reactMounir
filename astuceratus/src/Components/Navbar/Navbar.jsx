import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"

const Navbar = (props) => {
    return (
        <header className={styles.header}>
            <img id="logoRat" src="/logoRat.png" alt="logoRat"/> 
            <Link to="/rats">Home</Link>
            <Link to="/form">Contact</Link>
            <Link to="/rats">Help</Link>
            <Link to="/rats">About</Link>
        </header>
    )
}

export default Navbar;