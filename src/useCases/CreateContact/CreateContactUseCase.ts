import { Contact } from "../../entities/Contact";
import { IContactRepository } from "../../repositories/IContactRepository";
import { ICreateContactRequestDTO } from "./CreateContactDTO";
export class CreateContactUseCase {
  constructor(private contactRepository: IContactRepository) {}
  async execute(data: ICreateContactRequestDTO) {
    const contactAlreadyExists = await this.contactRepository.findByEmail(
      data.email
    );

    if (contactAlreadyExists) {
      throw new Error(`Contact already exists`);
    }
    const contact = new Contact(data);
    await this.contactRepository.save(contact);

    
  }
}
