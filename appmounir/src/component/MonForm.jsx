import React from "react";
import { useState } from "react";

const MonForm = (props) => {
  const [content, setState] = useState({title: "",time: "",complexity: "",room: ""});   

  const handleChange = (event) => {
    setState ({...content, [event.target.name]: event.target.value})
  }
  
    return (
        
        <form onSubmit={event => props.onSubmit(event, content)}>
            <label>
                <input type="text" name="title" value={content.title} onChange={handleChange}/>
            </label>
            <label>
                <input type="number" name="time" value={content.time} onChange={handleChange}/>
            </label>
            <label>
                <input type="number" name="complexity" value={content.complexity} onChange={handleChange}/>
            </label>
            <label>
                <input type="text" name="room" value={content.room} onChange={handleChange}/>
            </label>
        <input type={"submit"} value="Envoyer" />
        </form>
        
    )
}

export default MonForm;