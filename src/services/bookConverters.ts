import {UserBooksCreateFormInputValues} from "../ui-components/UserBooksCreateForm";
import {Book} from "../types/Book";

export default function suggestionBookToUserBook(book :Book):UserBooksCreateFormInputValues   {
    return {
        isbn: book.isbn,
        title: book.title,
        author : book.author,
        genre : book.genre,
        description : book.description,
        wordCount : book.wordCount
    }

}