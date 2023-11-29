import {UserBooksCreateFormInputValues} from "../ui-components/UserBooksCreateForm";
import {SuggestionBooks} from "../types/API";

export default function suggestionBookToUserBook(book: SuggestionBooks): UserBooksCreateFormInputValues {
    return {
        isbn: book.isbn??"",
        title: book.title??"",
        thumbnailUrl: book.thumbnailUrl??"",
        author: book.author?.map((author)=>author??''),
        genre: book.genre?.map((genre)=>genre??''),
        description: book.description??"",
        wordCount: book.wordCount??0
    }

}