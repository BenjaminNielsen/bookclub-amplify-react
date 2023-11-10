export class GoogleBookInfo {
    title: string;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    pageCount: number;
    categories: string[];
    averageRating: number;

    constructor(title: string, subtitle: string, authors: string[], publisher: string, publishedDate: string, description: string, pageCount: number, categories: string[], averageRating: number) {
        this.title = title;
        this.subtitle = subtitle;
        this.authors = authors;
        this.publisher = publisher;
        this.publishedDate = publishedDate;
        this.description = description;
        this.pageCount = pageCount;
        this.categories = categories;
        this.averageRating = averageRating;
    }


}