# Rendu de projet

Le projet AstuceRatus est site qui permets de réunir des astuces, coupons ou bon de réduction et code promo pour le plus grand nombre.

## Création ndu projet : 

Le projet est créer via le CRA ; la commande est entrée via le terminal : 
```
npx create-react-app astuceratus
```
cette commande permets de créer l'app avec une arborescence, mais surtout de mettre en place un environement de developpement configuré.

Nous utilisons tout au long du projet le langage JSX qui permets de facilité l'écriture du code en des applications Réact.


##Organisation du porjet :

Le projets est organisé de la façon suivante : 

![image](https://user-images.githubusercontent.com/63167717/158079999-dbbe175a-e215-4f51-8de5-f4b2583c930a.png)

Chaque fichier du porojet s'appel une modale et devra être importer pour être utiliser.

## Premier composant :

Le premier composant est la homepage :

```
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
```

![image](https://user-images.githubusercontent.com/63167717/158080179-16db498d-1450-4edd-a630-a0fb3fb47d98.png)

Le composant 'Home' est une fontion auxquel nous passon en parametre le term props qui signifie 'propriété' afin que les props défie dans la fonction ou composant, puisent être réutilisé. Il est aussi possible d'utiliser un 'spread operato' écrit de cette fonçon : '{...props} dans les objets et permet de rendre le composant plus fléxible.(mon niveau de me permets pas de l'utiliser dans ce projet)

Il est possible de passer un paramètre une fonction que l'on nomera alors un call-back. (n'étant pas de mon niveau j'ai pas su en mettre en place).

Le fichier composant commence par une majuscule afin d'être vu comme un composant a part entière.

le style de la page sera importé via une méthode : module CSS. Pour utiliser ce module CSS il faut créer un fichier nom.module.css puis appeler de le fichier composant :

```
import styles from "./Home.module.css";
```

et utilisé de la façon suivante : 

```
 <div className={styles.home}>
            <img id="logoRat" src="/logoRat.png" alt="logoRat"/> 
            <h1>Astuce Ratus ...</h1> 
        </div>
```

J'ai par la suite créer la Navbar contenant des liens routés. les routes s'utiliser grâce a l'import du module : 

```
import { Link } from "react-router-dom";
```

J'ai ensuite placé les liens des routes dans les des balises '<link>'

```
<header className={styles.header}>
            <img id="logoRat" src="/logoRat.png" alt="logoRat"/> 
            <Link to="/rats">Home</Link>
            <Link to="/form">Contact</Link>
            <Link to="/rats">Help</Link>
            <Link to="/rats">About</Link>
        </header>
    )
```
 Les liens retournes (par le mot clé 'to=""') vers le composant indiqué. Par exemple le fichier Rats.jsx'
 
 Le fichier Rats.jsx est un composant qui affiche les mots : 'Mega rats' grâce au code suivant : 
 
 ```
 export default function Rats() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Mega rats</h2>
      </main>
    );
  }
 ```
 
 le liens retourn alors l'affichage suivant : 
 
 ![image](https://user-images.githubusercontent.com/63167717/158081022-50403376-8ee3-46e6-8573-27b8e84523b6.png)

Enfin j'ai mis en place un caroussel en utilisant le composant suivant :

```
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
    <div >
        <img className={style.container} src={`${img.src}`} />
        <br/>
        <div className={style.button}>
            { pictures.length > 1 && <button className={style.leftbtn} onClick={() => moveLeft()}>Left</button> }
            { pictures.length > 1 && <button className={style.rightbtn} onClick={() => moveRight()}>Right</button> }
        </div>
    </div>
  );
};

export default ImagePlayer;
```
Ici nous utilison un hook 'useState' afin de déclarer l'état local du composant. Ici il s'agit de faire changer les images via un défillement.

Une hook est un outil permetant de récupéré un état locak et d'autre foncionalités sans avoir était écrite dans une classe.

Nous utilisont aussi un effet de bord ou 'Side efffect'qui permets a l'application de modifier ce que react ne sait pas modifier. Ici 'useEffect' va modifié l'image affiché.

Cela affihce le résultat suivant : 

![image](https://user-images.githubusercontent.com/63167717/158081170-8f9fcc76-2f6b-4da6-9bb9-e1be9a2a80f0.png)


Je n'ai pas pu utiliser le hook : 'useReducer' qui sert a remplacer useState pour géré des de logiques plus complexe de l'application.
Je n'ai pas non plus utiliser d'appel API en creant par exmemple un objet 'Context' dans la consatant 'createContext'(au dessus de mon niveau). 
