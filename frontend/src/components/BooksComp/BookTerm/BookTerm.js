import React from 'react';
import {Link} from 'react-router-dom';
const bookTerm=(props)=>{
    return (
        <tr key={props.term.id}>
            <td scope={"col"}>{props.term.name}</td>
            <td scope={"col"}>{props.term.category}</td>
            <td scope={"col"}>{props.term.author.name+" "+props.term.author.surname}</td>
            <td scope={"col"}>{props.term.availableCopies}</td>
            <td scope={"col"} className={"text-right"}>
                <a title={"Delete"}
                   onClick={()=>props.onDelete(props.term.id)}>
                    Delete
                </a>
                <Link
                      onClick={()=>props.onEdit(props.term.id)}
                      to={`/books/edit/${props.term.id}`}>
                    Edit
                </Link>
                <a title={"Mark As Taken"}
                   onClick={()=>props.MarkAsTaken(props.term.id)}>
                    Get Book
                </a>
                <a title={"Add Copy"}
                   onClick={()=>props.onAddCopy(props.term.id)}>
                    Add Copy
                </a>
            </td>
        </tr>
    );
}
export default bookTerm;