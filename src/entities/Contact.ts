import { uuid } from "uuidv4";

export class Contact{

    public readonly id:string;
    public name: string;
    public email: string;
    public fone:string;

    constructor(props:Omit<Contact, 'id'>, id?:string){
        Object.assign(this,props);
        if(!id){
            this.id = uuid();
        }
    }
}
