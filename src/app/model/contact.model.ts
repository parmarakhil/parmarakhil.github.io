import { Timestamp } from "firebase/firestore";

export class Contact {
    name: string;
    email: string;
    message: string;
    date: Timestamp;
}