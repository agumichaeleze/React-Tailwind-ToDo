import React, { useContext, useState } from "react";
import { booksContext } from "./BookProvider";
import { Trash, Pencil, Check, X } from "lucide-react";

function Booklist() {
  const { books, search, isHidden, handleDelete, handleEditBook } =
    useContext(booksContext);

  const [editingTitle, setEditingTitle] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toUpperCase().includes(search.toUpperCase())
  );

  if (isHidden) return null;

  return (
    <div>
      <div>
        <ul className="text-xl md:text-2xl space-y-3">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-slate-800 text-gray-200 px-4 py-2 rounded-md shadow"
              >
                {/* If this book is being edited */}
                {editingTitle === book.title ? (
                  <input
                    type="text"
                    className="px-2 py-1 rounded text-black"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleEditBook(book.title, newTitle);
                        setEditingTitle(null);
                      }
                    }}
                  />
                ) : (
                  <span>{book.title}</span>
                )}

                {/* Actions */}
                <div className="flex space-x-2">
                  {editingTitle === book.title ? (
                    <>
                      {/* Save */}
                      <button
                        className="text-green-500"
                        onClick={() => {
                          handleEditBook(book.title, newTitle);
                          setEditingTitle(null);
                        }}
                      >
                        <Check size={20} />
                      </button>
                      {/* Cancel */}
                      <button
                        className="text-gray-400"
                        onClick={() => setEditingTitle(null)}
                      >
                        <X size={20} />
                      </button>
                    </>
                  ) : (
                    <>
                      {/* Edit */}
                      <button
                        className="text-yellow-500 hover:text-yellow-600 transition"
                        onClick={() => {
                          setEditingTitle(book.title);
                          setNewTitle(book.title);
                        }}
                      >
                        <Pencil size={20} />
                      </button>
                      {/* Delete */}
                      <button
                        className="text-red-600 hover:text-red-700 transition"
                        onClick={() => handleDelete(book.title)}
                      >
                        <Trash size={20} />
                      </button>
                    </>
                  )}
                </div>
              </li>
            ))
          ) : (
            <li className="text-gray-400 italic">Book Not Found</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Booklist;
