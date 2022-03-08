import React, {useState} from "react";
import ContentTask from "./ContentTask";
import MonForm from "./MonForm";

const Tasklist = (props) => {
    const [list, setList] = useState(props.list);

    const handleSubmit = (event, content) =>
    setList([...list, content]);

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
                {props.list.map( taskObject => <ContentTask content={taskObject}/>)}
                </tbody>
            </table>
            <MonForm/>
        </div>
    )
}

export default Tasklist;