import React from 'react';

const authors = (props) => {
    return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th scope={"col"}>Name</th>
                        <th scope={"col"}>Surname</th>
                        <th scope={"col"}>Country Name</th>
                        <th scope={"col"}>Country Continent</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.authors.map((term) => {
                        return (
                            <tr>
                                <td>{term.name}</td>
                                <td>{term.surname}</td>
                                <td>{term.country.name}</td>
                                <td>{term.country.continent}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
        </div>
    );
}
export default authors;