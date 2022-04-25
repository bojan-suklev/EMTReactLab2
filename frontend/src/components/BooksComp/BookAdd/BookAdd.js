import React from 'react';
import {useHistory} from 'react-router-dom';

const BookAdd=(props)=>{

    const history=useHistory();
    const [formData, updateFormData]=React.useState({
        name:"",
        category:" ",
        author:1,
        availableCopies:0
    })
    const handleChange=(e)=>{
        updateFormData({
            ...formData,
            [e.target.name]:e.target.value.trim()
        })
    }
    const onFormSubmit=(e)=>{
        e.preventDefault();
        const name=formData.name;
        const category=formData.category;
        const author=formData.author;
        const availableCopies=formData.availableCopies;

        props.onAddBook(name,category,author,availableCopies);
        history.push("/books");
    }

    return(
        <div className={"container-fluid"}>
            <hr/>
            <h1 className={"text-center"}>Add book</h1>
            <hr/>
            <div>
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name of the book</label>
                        <input type="text"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter Book name"
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Author</label>
                        <select name="author" onChange={handleChange}>
                            {props.authors.map((term) =>
                                <option value={term.id}>{term.name+ " " + term.surname}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Category for the book</label>
                        <select name="category" onChange={handleChange}>
                            {props.categories.map((term) =>
                                <option value={term}>{term}</option>
                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="availableCopies">Available Copies for the book</label>
                        <input type="text"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder="Available Copies"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className={"text-center "}><button id="submit" type="submit" className="btn btn-primary btn-block">Submit</button></div>

                </form>
            </div>
        </div>

    )
}
export default BookAdd;

