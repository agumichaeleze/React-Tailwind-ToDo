import React, {useContext} from "react";
import { booksContext } from "./BookProvider";

function BookHideToggle () {

    const {isHidden, setIsHidden } = useContext(booksContext);
    return(
        <div className="text-base md:text-2xl">
            <label>
                <input type="checkbox"
                checked={isHidden}
                onChange={(e) => setIsHidden(e.target.checked)}/>
                Hide Books
            </label>
        </div>
    );
}
export default BookHideToggle


