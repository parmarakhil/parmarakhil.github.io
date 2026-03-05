export interface IAbout {
    internationalizations: IAboutInternationalization[];
    medias?: IAboutMedia[];
    hobbies?: IAboutHobby[];
    certifications?: ICertification[];
    skills?: ISkills;
    achievements?: IAchievement[];
}

export interface IAboutInternationalization {
    language: string;
    description: string;
}

export interface IAboutMedia {
    icon: string; // Use the official names of Brand Icons (https://www.w3schools.com/icons/fontawesome_icons_brand.asp)
    title: string;
    http: string;
}

export interface IAboutHobby {
    icon: string; // Use the official names of Brand Icons (https://www.w3schools.com/icons/fontawesome_icons_brand.asp)
    title: string;
}

export interface ICertification {
    title: string;
    issuer: string;
    year: number;
    month?: string;
    category: string;
}

export interface ISkills {
    backend?: string[];
    cloud?: string[];
    databases?: string[];
    messaging?: string[];
    tools?: string[];
    [key: string]: string[] | undefined;
}

export interface IAchievement {
    title: string;
    description: string;
    year: number;
    dateRange?: string;
}