import React from "react";
import ReactDOM from 'react-dom';
import { useState } from "react";

const MonForm = (props) => {

    const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }
  
    return (
        <form>
            <label>
                Titre :<input type="text" name="Titre" value={inputs.title} onChange={handleChange}/>
            </label>
            <label>
                Durée :<input type="text" name="name" value={inputs.time} onChange={handleChange}/>
            </label>
            <label>
                Difficulté :<input type="text" name="name" value={inputs.complexity} onChange={handleChange}/>
            </label>
            <label>
                Pièce :<input type="text" name="name" value={inputs.room} onChange={handleChange}/>
            </label>
        <input type="submit" value="Envoyer" />
        </form>
    )
}

ReactDOM.render(<MonForm/>, document.getElementById('root'))

export default MonForm;