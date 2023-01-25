import { Contact } from "../entities/Contact";

export interface IUserRepository{
    findByEmail(email:string):Promise<Contact>;
    save(contact: Contact):Promise<void>;
    update(contact: Contact):Promise<Contact>;
}