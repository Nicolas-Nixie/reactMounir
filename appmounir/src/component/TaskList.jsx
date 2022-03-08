import React, {useState} from "react";
import ContentTask from "./ContentTask";
import MonForm from "./MonForm";

const Tasklist = (props) => {
    
    const [list, setList] = useState(props.list);

    const handleSubmit = (event, content) =>  {
    event.preventDefault();
    setList([...list, content]);
    console.log([...list, content])
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th colSpan={2} > Titre </th>
                        <th colSpan={2} > Durée </th>
                        <th colSpan={2} > Difficulté </th>
                        <th colSpan={2} > Pièce </th>
                    </tr>
                </thead>
                <tbody>
                {list.map( taskObject => <ContentTask content={taskObject}/>)}
                </tbody>
            </table>
            <MonForm onSubmit={handleSubmit}/>
        </div>
    )
}

export default Tasklist;