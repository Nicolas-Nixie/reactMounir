import React from "react";

const ContentTask = (props) => {
    return (
        <tr>
            <td colSpan={2}>{props.content.title}</td>
            <td colSpan={2}>{props.content.time}</td>
            <td colSpan={2}>{props.content.complexity}</td>
            <td colSpan={2}>{props.content.room}</td>
        </tr>
    )
}

export default ContentTask;