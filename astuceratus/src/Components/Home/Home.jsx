import React from "react";
import styles from "./Home.module.css";

const Home = (props) => {
    return (
        <div className={styles.home}>
            <img id="logoRat" src="/logoRat.png" alt="logoRat"/> 
            <h1>Astuce Ratus ...</h1> 
        </div>
    )
}

export default Home;