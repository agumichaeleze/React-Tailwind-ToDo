import { useState } from "react"
import { Trash, Pencil, Check, X } from "lucide-react";

function BooksToRead () {

    const [books, setBooks] = useState([
        { title: "CHEMISTRY", completed: false },
        { title: "PHYSICS", completed: false },
        { title: "BIOLOGY", completed: false },
        { title: "MATHS", completed: false },
    ]);

    const [addBook, setAddBook] = useState("");
    const [search, setSearch] = useState("");
    const [isHidden, setIsHidden] = useState(false);
    const [editingTitle, setEditingTitle] = useState(null);
    const [newTitle, setNewTitle] = useState("");


    const handleAddBook = () => {
        if ( addBook.trim() !== "" && !books.some((book) => book.title === addBook.toUpperCase())){
            const newBook = { title: addBook.toUpperCase(), completed: false };
            setBooks([...books, newBook]);
            setAddBook("");
        }
    };

    const filteredBooks = books.filter((book) => 
        book.title.toUpperCase()
        .includes(search.toUpperCase())
    );

    const handleDelete = (titleToDelete) => {
            setBooks(books.filter((book) => book.title !== titleToDelete));
    };

    const handleEditBook = (oldTitle, newTitle) => {
        setBooks(
            books.map((book) => book.title === oldTitle ? {...book, title: newTitle.toUpperCase()} : book)
        );
    };

    return(
       <div className="bg-slate-700">
            <div className="max-w-6xl  text-gray-200 mx-auto text-center py-5 px-5">
                <h1 className="text-3xl md:text-4xl py-4">Books To Read</h1>

                {/* SEARCH FOR BOOKS */}
                <h2 className="text-xl md:text-2xl py-4">Search For Books</h2>
                <input type="text"
                placeholder="Search Books..."
                className="border outline-0 px-4 py-2 rounded-md text-base md:text-2xl"
                value={search}
                onChange={(e) => setSearch(e.target.value)}/>
            
                {/* BOOKS TO READ */}
                <div className={isHidden ? "hidden" : " block"}>
                    <ul className="text-xl md:text-2xl space-y-3">
                        {filteredBooks.length > 0 ? (
                        filteredBooks.map((book, index) => (
                            <li key={index} className="py-2">
                                <div className="flex justify-between items-center bg-slate-800 text-gray-200 px-4 py-2 rounded-md shadow">
                                    {/* if this book is being edited */}
                                    {editingTitle === book.title ? 
                                    (<input
                                        type="text"
                                        className="px-2 py-1 rounded text-white"
                                        value={newTitle} 
                                        onChange={(e) => setNewTitle(e.target.value)}
                                        onKeyDown={(e) =>{
                                            if (e.key === "Enter"){
                                                handleEditBook(book.title, newTitle)
                                            }
                                        }}
                                    />
                                    ) : (
                                    <span>{book.title}</span>
                                    )}

                                    {/* actions */}
                                    <div className=" flex space-x-2">
                                        {editingTitle === book.title ? (
                                            <>
                                                {/* Save */}
                                                <button
                                                className="text-green-500"
                                                onClick={() => {
                                                    handleEditBook(book.title, newTitle);
                                                    setEditingTitle(null);
                                                }}>
                                                    <Check />
                                                </button>
                                                {/* Cancel */}
                                                <button className="text-gray-400"
                                                onClick={() => setEditingTitle(null)}
                                                >
                                                <X size={18} /></button>
                                            </>
                                        ) : (
                                            <>
                                                {/* Edit */}
                                                <button
                                                className="text-yellow-400"
                                                onClick={() => {
                                                    setEditingTitle(book.title);
                                                    setNewTitle(book.title);
                                                }}>
                                                    <Pencil size={20} />
                                                </button>
                                                {/* DELETE BUTTON */}
                                                <button
                                                    className=" text-red-600 hover:text-red-700 py-1 rounded-md cursor-pointer transition"
                                                    onClick={() => handleDelete(book.title)}>
                                                    <Trash size={18}/>
                                                </button>
                                            </>
                                        )}
                                    </div>
                                        
                                </div>                    
                            </li>
                        ))
                        ) : (
                        <li className="text-gray-400 italic">Book Not Found</li>
                        )}
                    </ul>
   
                {/* ADD BOOKS */}
                <h2 className="text-xl md:text-2xl pt-10">Add More Books</h2>
                <div className=" my-5 flex items-center justify-center">
                    <input type="text"
                    placeholder="Enter book...."
                    className="border outline-0 px-4 py-2 rounded-l-md text-base md:text-2xl"
                    value={addBook}
                    onChange={(e) =>setAddBook(e.target.value)}/>
                    <button className="bg-green-950 p-2.5 md:p-3.5 rounded-r-md cursor-pointer hover:bg-green-900 transition-all"
                    onClick={handleAddBook}>
                        Add Book
                    </button>
                </div>
            </div>

             {/* HIDE BOOKS */}
            <div className="text-base md:text-2xl">
                <label >
                    <input type="checkbox"
                    checked={isHidden}
                    onChange={(e) => setIsHidden(e.target.checked)}
                    />
                    Hide Books
                </label>
            </div>
        </div>
       </div>
    );
}

export default  BooksToRead
