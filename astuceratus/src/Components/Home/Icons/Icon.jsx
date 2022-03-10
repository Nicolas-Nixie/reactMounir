import React from "react";
import styles from "./Icon.module.css";
import { Link } from "react-router-dom";

const Icon = (props) => {
    return (
        <div className={styles.icon}>
            <Link to="./rats"><img id="couteau" src="/magasin.png" alt="Magasin"/></Link>
            <Link to="./rats"><img id="eco" src="/eco.png" alt="Economie"/></Link>
            <Link to="./rats"><img id="couteau" src="/couteau.png" alt="Restaurant"/></Link>
            <Link to="./rats"><img id="voyage" src="/voyage.png" alt="Voyage"/></Link>
            <Link to="./rats"><img id="recherche" src="/chercher.png" alt="Recherche"/></Link>
        </div>
    )
}

export default Icon;