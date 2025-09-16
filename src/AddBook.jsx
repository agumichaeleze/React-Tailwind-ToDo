import React, {useContext, useState} from "react";
import { booksContext } from "./BookProvider";

function AddBook (){
    const {handleAddBook} = useContext(booksContext)

    const [newBook, setNewBook] = useState("");
    return(
        <div className="py-10">
            <h2 className="text-xl md:text-2xl">Add More Books</h2>
           <div className="mt-5 flex items-center justify-center">
             <input type="text"
            placeholder="Enter book..."
            className="border outline-0 px-4 py-2 rounded-l-md text-base md:text-2xl"
            value={newBook}
             onChange={(e) => setNewBook(e.target.value)}
            />
            <button className="bg-green-950 p-2.5 md:p-3.5 rounded-r-md cursor-pointer hover:bg-green-900 transition-all"
            onClick={() =>{ handleAddBook(newBook);
                setNewBook("")
            }}>
                Add Book
            </button>
           </div>
        </div>
    );
}
export default AddBook



