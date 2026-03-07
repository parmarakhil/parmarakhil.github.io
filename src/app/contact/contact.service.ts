import { Firestore, collection, DocumentReference, addDoc } from "@angular/fire/firestore";
import { Contact } from "../model/contact.model";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ContactService {

    constructor(private database: Firestore) {}
    

    createContact(contact: Contact): Promise<DocumentReference> {
        const mailRef = collection(this.database, "contacts");
        const htmlMessage = this.buildHtmlMessage(contact);

        return addDoc(mailRef, {
            to: ["akhilparmar2496@gmail.com"],
            from: "parmar.akhil@outlook.com",
            subject: `New message from ${contact.name}`,
            message: {
                subject: `New message from ${contact.name}`,
                text: `Name: ${contact.name}\nEmail: ${contact.email}\nMessage: ${contact.message}`,
                html: htmlMessage
            },
            replyTo: contact.email,
            createdAt: contact.date
        });
    }

    private buildHtmlMessage(contact: Contact): string {
        const name = this.escapeHtml(contact.name || "");
        const email = this.escapeHtml(contact.email || "");
        const message = this.escapeHtml(contact.message || "").replace(/\n/g, "<br/>");

        return `
            <div style="font-family: Arial, sans-serif; color: #0f172a;">
                <h2 style="margin: 0 0 12px;">New Contact Message</h2>
                <p style="margin: 0 0 6px;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 0 0 6px;"><strong>Email:</strong> ${email}</p>
                <p style="margin: 12px 0 6px;"><strong>Message:</strong></p>
                <p style="margin: 0; white-space: normal;">${message}</p>
            </div>
        `.trim();
    }

    private escapeHtml(input: string): string {
        return input
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }
}