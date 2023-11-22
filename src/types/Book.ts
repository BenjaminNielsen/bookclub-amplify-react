import {UserBooksCreateFormInputValues} from "../ui-components/UserBooksCreateForm";

export class Book  {
    id?: string
    isbn?: string
    title?: string
    thumbnailUrl?:string
    author?: [string]
    genre?: [string]
    numberInSeries?: string
    wordCount?: number
    description?: string
    createdAt?: Date

    toUserBook():UserBooksCreateFormInputValues {

        return {
            isbn: this.isbn,
            title: this.title,
            author : this.author,
            genre : this.genre,
            description : this.description,
            wordCount : this.wordCount
        }

    }
}