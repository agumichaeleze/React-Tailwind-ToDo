import React, {useContext} from "react";

import { booksContext } from "./BookProvider";
// import BookItem from "./BookItem";



function Booklist () {

    const {books, search, isHidden, handleDelete } = useContext(booksContext);    

    const filteredBooks = books.filter((book) => 
        book.title.toUpperCase()
        .includes(search.toUpperCase())
    );


     if (isHidden) return null;
    return(
        <div >
            {/* Books to read */}
            <div>
                <ul className="text-xl md:text-2xl space-y-3">
                {filteredBooks.length > 0 ? 
                (filteredBooks.map((book, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center bg-slate-800 text-gray-200 px-4 py-2 rounded-md shadow">
                    <span>{book.title}</span>
                     <button
                      className="bg-red-600 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-700 transition"
                      onClick={() => handleDelete(book.title)}>
                      Delete
                    </button>
                 </li>
                  )))
                   : 
                (<li className="text-gray-400 italic">
                    Book Not Found
                </li>
                )}
                </ul>


                 {/* <ul className="text-xl md:text-2xl space-y-3">
                  {filteredBooks.length > 0 ? (
                  filteredBooks.map((book, index) => <BookItem key={book.title} book={book} />)
                  ) : (
                    <li className="text-gray-400 italic">Book Not Found</li>
                  )}
                </ul> */}

            </div>        
        </div>
    );
}
export default Booklist



                  