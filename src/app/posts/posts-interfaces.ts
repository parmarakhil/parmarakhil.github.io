export interface IPost {
    thumbnail: string
    http: string;
    date: string; // For the purpose of stringifying MM-DD-YYYY date format
    pubDate?: Date; // Original publication date for sorting
    engagement?: number; // Likes/claps count
    author?: string; // Blog post author (default: Akhil Parmar)
    categories?: string[]; // Blog categories/tags (System Design, Distributed Systems, Career, etc.)
    readingTime?: number; // Estimated reading time in minutes
    keywords?: string[]; // SEO keywords for the blog article
    internationalizations: IPostInternationalization[];
}

export interface IPostInternationalization {
    language: string;
    title: string;
    description: string; // Blog excerpt/summary
    content?: string; // Full blog content for SEO
}