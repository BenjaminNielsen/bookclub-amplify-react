import {GoogleBookInfo} from "../types/GoogleBookInfo";

export async function getBookByIsbn(isbn: string): Promise<GoogleBookInfo | null> {
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=AIzaSyCT6QISwU6W6GLjEhnC5Iw1gnQpHo92G5g`);
        const json = await response.json();
        console.log("Json response: %o", json);
        const book = json.items[0].volumeInfo;
        return new GoogleBookInfo(book.title, book.subtitle, book.imageLinks?.thumbnail ?? "", book.authors, book.publisher, book.publishedDate, book.description, book.pageCount, book.categories, book.averageRating);
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function getBookByTitle(title: string): Promise<GoogleBookInfo | null> {
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&key=AIzaSyCT6QISwU6W6GLjEhnC5Iw1gnQpHo92G5g`);
        const json = await response.json();
        console.log("Json response: %o", json);
        const book = json.items[0].volumeInfo;
        return new GoogleBookInfo(book.title, book.subtitle, book.thumbnail, book.authors, book.publisher, book.publishedDate, book.description, book.pageCount, book.categories, book.averageRating);
    } catch (error) {
        console.error(error);
        return null;
    }
}