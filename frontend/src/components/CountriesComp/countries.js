import React from "react";
const countries = (props) =>{
    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th scope={"col"}>Name:</th>
                    <th scope={"col"}>Continent:</th>
                </tr>
                </thead>
                <tbody>
                {props.countries.map((term)=>{
                    return(
                        <tr>
                            <td>{term.name}</td>
                            <td>{term.continent}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>

    );
}
export default countries;