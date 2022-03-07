import React from 'react';
import { useState} from 'react';

const variable = 'mavariable';

const Button = (props) => {

    const [monChiffre, setState] = useState(4);
    const handleClick = () => {
        console.log("ca marche baby")
    }
    const unBooleen = true;
    return (
        <div>
            { variable }
            <br/>
            { [1, 2, 3, 4].map(x => x * x).join(', ') }
            <br/>
            { unBooleen && 'Ba oui c est bon' }
            <br/>
            <button onClick={() => handleClick()} >Click me bitch</button>
        </div>
    )
}

export default Button;