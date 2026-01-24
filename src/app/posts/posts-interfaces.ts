export interface IPost {
    thumbnail: string
    http: string;
    date: string; // For the purpose of stringifying MM-DD-YYYY date format
    pubDate?: Date; // Original publication date for sorting
    engagement?: number; // Likes/claps count
    author?: string; // Post author
    categories?: string[]; // Post categories/tags
    internationalizations: IPostInternationalization[];
}

export interface IPostInternationalization {
    language: string;
    title: string;
    description: string;
}