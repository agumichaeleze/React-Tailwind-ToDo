import React, {createContext, useState} from "react";

export const booksContext = createContext();
export function BookProvider ({children}) {

    const [books, setBooks] = useState([
            { title: "CHEMISTRY", completed: false },
            { title: "PHYSICS", completed: false },
            { title: "BIOLOGY", completed: false },
            { title: "MATHS", completed: false },
        ]);

    const [search, setSearch] = useState("");  
    const [isHidden, setIsHidden] = useState(false); 
  

    const handleAddBook = (title) => {
        if (title.trim() !== "" && !books.some((book) => book.title === title.toUpperCase())) {
            const newBook = { title: title.toUpperCase(), completed: false };
            setBooks([...books, newBook]);
            }
        };   

    const handleDelete = (titleToDelete) => {
            setBooks(books.filter((book) => book.title !== titleToDelete));
    }; 

    const handleToggleComplete = (bookTitle) => {
        setBooks(books.map((book) => book.title === bookTitle
            ? { ...book, completed: !book.completed }
            : book
            )
        );
    };    


    return(
        <booksContext.Provider value={{ books, search, setSearch, handleAddBook, handleDelete, handleToggleComplete, isHidden, setIsHidden,  }}>
            {children}
        </booksContext.Provider>
    );
}