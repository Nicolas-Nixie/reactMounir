# Rendu de projet

Nous utilisons tout au long du projet le langage JSX qui permets de facilité l'écriture du code en des applications Réact.

Decouverte du react a traver les premiers composants. Nous avons vu que chaque composant est une focntion ecrit de la fonction suivante : 

function MonComposant () => {
  Return;
};

export default MonComposant;

les parenthèse permetent de passer des parametres ou des fontion qui senome alors : Call-back. Le mot clé return retourn l'état du composant
La derniere ligne du composant contenant le mot cle export sert a exporter le composant afin qu'il soit appelé (ou importer via le mot clé import) dans le reste de notre code.

Dans les différents partie nous avons fait un premier composant dont voici le résultat :

![J1](https://user-images.githubusercontent.com/63167717/157195488-f18a9206-b181-4960-a763-8696cd0cece9.png)

Puis nous avons fait un tableau d'objets dont le résultat sur notre page est :

![listObjet](https://user-images.githubusercontent.com/63167717/157195610-2a85f5ef-1c10-4cb4-8f03-0ca381ac0b5d.png)

Puis nous avons fais dans champs nous permetant d'ajouter des lignes a notre tableau :

![Envoi formulaire](https://user-images.githubusercontent.com/63167717/157208371-089a6664-ba41-4bc4-b899-fdc70889d28c.png)

Nous avons mis en place les Routes :

Il fichier router contenant le code qui sera afficher lors du click sur le liens :

```
export default function Rats() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Mega rats</h2>
      </main>
    );
  }
```
 le fichier App.js contient quand à lui l'export du composant :
 ```
 return (
    <div className="App">
      <header className="App-header">
        <Link to="/rats">Rats</Link>
        <Button premsProps={"fion"}/>
        <Tasklist list={myTaskList} />
        <TaskList list={myTaskList} />
      </header>
    </div>
  );
 ```
 
 Le resutltat sera sur la page principale : 
 
 link![image](https://user-images.githubusercontent.com/63167717/158079277-28f660e6-ec42-473a-a390-3717cfffbd82.png)

le resltat du lien cliqué : 

retourLink![image](https://user-images.githubusercontent.com/63167717/158079294-776a53b0-8ac7-49cf-a343-ff632434bb1f.png)
