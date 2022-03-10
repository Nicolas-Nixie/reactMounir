import React, { useEffect, useState } from "react"; //l'effet de bord (ici) sert a récupérer chaque modification du tableau des images
import style from "./Caroussel.module.css";

const ImagePlayer = ({ pictures }) => {

    const [img, setImg] = useState({
        src: pictures[0],
        position: 0
    });

    useEffect(() => {
        setImg({ ...img, src: pictures[0] })
    }, [pictures])

    var moveRight = () => {
        if (img.position >= pictures.length - 1) {
            setImg({ src: pictures[0], position: 0 })
            return;
        }
        setImg({ src: pictures[img.position + 1], position: img.position + 1 })
    }

    var moveLeft = () => {
        if(img.position < 1) {
            setImg({ src: pictures[pictures.length - 1], position: pictures.length - 1 })
            return;
        }
        setImg({ src: pictures[img.position - 1], position: img.position - 1 })
    }
    
  return (
    <div className={style.container}>
        <img className="img" src={`${img.src}`} />
        { pictures.length > 1 && <button className="left-btn" onClick={() => moveLeft()}>Left</button> }
        { pictures.length > 1 && <button className="right-btn" onClick={() => moveRight()}>Right</button> }
    </div>
  );
};

export default ImagePlayer;