import { useState } from 'react';

const BookShelf = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    });

    const handleInputChange = (event) => {
        setNewBook({...newBook, [event.target.name]: event.target.value});
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const currentbooks = [...books];
        currentbooks.push(newBook);
        setBooks(currentbooks);
        setNewBook({title: '', author: ''});
    }
    
    return (
        <div className='bookshelfDiv'>
            <div className='formDiv'>
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title: </label>
                    <input name='title' value={newBook.title} onChange={handleInputChange}/>
                    <label htmlFor="author">Author: </label>
                    <input name='author' value={newBook.author} onChange={handleInputChange}/>
                    <button>Add Book</button>
                </form>
            </div>
            <div className='bookCardsDiv'>
                {books.map(element => {
                    return (
                        <div className='bookCardsDiv'>
                            <h2>{element.title}</h2>
                            <h3>by {element.author}</h3>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default BookShelf;