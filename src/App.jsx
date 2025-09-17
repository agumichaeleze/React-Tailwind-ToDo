import BooksToRead from "./BooksToRead"
import { BookProvider } from "./BookProvider"
import Booklist from "./BookList"
import BookSearch from "./BookSearch"
import AddBook from "./AddBook"
import BookHideToggle from "./BookHideToggle"




function App() {
  
  return (
    <>
    <div className="bg-slate-700 h-screen">
          <div className="max-w-6xl  text-gray-200 mx-auto text-center py-5 px-5">
            <BookProvider>
              <BookSearch />
              <Booklist />
              <AddBook />
              <BookHideToggle />
            </BookProvider>
        </div>
    </div>
    {/* <BooksToRead /> */}
    </>
  )
}

export default App




