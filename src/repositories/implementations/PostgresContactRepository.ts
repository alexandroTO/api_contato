import { Contact } from "../../entities/Contact";
import { IContactRepository } from "../IContactRepository";

export class PostgreContactRepository implements IContactRepository{
    private contacts: Contact[] = [];

    async findByEmail(email: string): Promise<Contact> {
        const contact = this.contacts.find(contact => contact.email === email);

        return contact
    }
    async save(contact: Contact): Promise<void> {
        this.contacts.push(contact);
    }
    async update(contact: Contact): Promise<void> {
        this.contacts.push(contact);
    }
}