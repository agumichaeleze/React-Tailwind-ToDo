import { useState } from "react"

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

      // ✅ Toggle Completed
    const handleToggleComplete = (bookTitle) => {
        setBooks(books.map((book) =>book.title === bookTitle
            ? { ...book, completed: !book.completed }
            : book
        )
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
                                    {/* ✅ Show completed with line-through */}
                                    <span className={`cursor-pointer ${book.completed ? "line-through text-gray-400" : ""}`}
                                    onClick={() => handleToggleComplete(book.title)}>
                                        {book.title}
                                    </span>
                                    <div className="space-x-2">
                                        {/* COMPLETE / UNDO BUTTON */}
                                        <button className={`${book.completed ? "bg-yellow-600 hover:bg-yellow-700" :
                                        "bg-blue-600 hover:bg-blue-700"}
                                        text-white px-3 py-1 rounded-md cursor-pointer transition`}
                                        onClick={() => handleToggleComplete(book.title)}>
                                            {book.completed ? "Undo" : "Complete"}
                                        </button>

                                        {/* DELETE BUTTON */}
                                        <button
                                            className="bg-red-600 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-700 transition"
                                            onClick={() => handleDelete(book.title)}>
                                            Delete
                                        </button>
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
