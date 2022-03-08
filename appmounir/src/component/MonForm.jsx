import React from "react";
import { useState } from "react";

const MonForm = (props) => {

    const [inputs, setState] = useState({title: '',time: '',complexity: '',room: ''});

  const handleChange = (event) => {
    setState ({...inputs, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }
  
    return (
        <div>
        <form>
            <label>
                <input type="text" name="title" value={inputs.title} onChange={handleChange}/>
            </label>
            <label>
                <input type="text" name="time" value={inputs.time} onChange={handleChange}/>
            </label>
            <label>
                <input type="text" name="complexity" value={inputs.complexity} onChange={handleChange}/>
            </label>
            <label>
                <input type="text" name="room" value={inputs.room} onChange={handleChange}/>
            </label>
        <input type="submit" value="Envoyer" />
        </form>
        </div>
    )
}

export default MonForm;