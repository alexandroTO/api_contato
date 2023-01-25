import { Contact } from "../entities/Contact";

export interface IContactRepository{
    findByEmail(email:string):Promise<Contact>;
    save(contact: Contact):Promise<void>;
    update(contact: Contact):Promise<void>;
}