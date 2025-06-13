import { Firestore, collection, getDocs, DocumentReference, addDoc } from "@angular/fire/firestore";
import { Contact } from "../model/contact.model";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ContactService {

    constructor(private database: Firestore) {}
    

    createContact(contact: Contact): Promise<DocumentReference> {
        const contactsRef = collection(this.database, 'contacts');
        return addDoc(contactsRef, contact)
    }
}