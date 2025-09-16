import React, { useContext } from "react";
import { booksContext } from "./BookProvider";

function BookItem({ book }) {
  const { handleDelete, handleToggleComplete } = useContext(booksContext);

  return (
    <li className="py-2">
      <div className="flex justify-between items-center bg-slate-800 text-gray-200 px-4 py-2 rounded-md shadow">
        {/* Click to toggle complete */}
        <span
          className={`cursor-pointer ${
            book.completed ? "line-through text-gray-400" : ""
          }`}
          onClick={() => handleToggleComplete(book.title)}
        >
          {book.title}
        </span>

        <div className="space-x-2">
          <button
            className={`${
              book.completed
                ? "bg-yellow-600 hover:bg-yellow-700"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white px-3 py-1 rounded-md cursor-pointer transition`}
            onClick={() => handleToggleComplete(book.title)}
          >
            {book.completed ? "Undo" : "Complete"}
          </button>

          <button
            className="bg-red-600 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-700 transition"
            onClick={() => handleDelete(book.title)}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
}

export default BookItem;
