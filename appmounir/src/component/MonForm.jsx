import React from "react";
import ReactDOM from 'react-dom';

const MonForm = (props) => {
    return (
        <form>
            <label>
                Titre :<input type="text" name="Titre"/>
                Durée :<input type="text" name="name"/>
                Difficulté :<input type="text" name="name"/>
                Pièce :<input type="text" name="name"/>
            </label>
        <input type="submit" value="Envoyer" />
        </form>
    )
}

ReactDOM.render(<MonForm/>, document.getElementById('root'))

export default MonForm;