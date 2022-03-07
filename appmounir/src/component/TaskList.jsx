import React from "react";
import ContentTask from "./ContentTask";

const Tasklist = (props) => {

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
        </div>
    )
}

export default Tasklist;