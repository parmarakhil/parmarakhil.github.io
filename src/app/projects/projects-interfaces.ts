export interface IProject {
    thumbnail: string
    http: string;
    date: string; // For the purpose of stringifying MM-DD-YYYY date format
    internationalizations: IProjectInternationalization[];
}

export interface IProjectInternationalization {
    language: string;
    title: string;
    description: string;
}