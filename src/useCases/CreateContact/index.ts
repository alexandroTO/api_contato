import { PostgreContactRepository } from "../../repositories/implementations/PostgresContactRepository";
import { CreateContactController } from "./CreateContactController";
import { CreateContactUseCase } from "./CreateContactUseCase";


const postgreContactRepository = new PostgreContactRepository()

const createContactUseCase = new CreateContactUseCase(
    postgreContactRepository
);

const createContactController = new CreateContactController(
    createContactUseCase,
)
export {createContactUseCase,createContactController}