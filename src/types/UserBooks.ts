export type UserBook = {
    id: string
    isbn?: string | null
    title?: string | null
    thumbnailUrl?:string|null
    author?: Array<string | null> | null
    genre?: Array<string | null> | null
    numberInSeries?: string | null
    wordCount?: number | null
    description?: string | null
    rating?: number | null
    progress?: number | null
    dateStarted?: string | null
    dateFinished?: string | null
    createdAt?: string
    updatedAt?: string
    owner?: string | null
}