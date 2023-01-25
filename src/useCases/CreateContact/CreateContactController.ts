import { Request,response,Response } from "express";
import { CreateContactUseCase } from "./CreateContactUseCase";

export class CreateContactController{
    constructor(
        private createContactUseCase:CreateContactUseCase
    ){}

        async handle(request:Request,reponse:Response):Promise<Response>{
            
             
            const {name,email,fone} = request.body;
            try{
                await this.createContactUseCase.execute({
                    name,
                    email,
                    fone
                    
                })
                return response.status(201).send();
            }catch(err){
                return response.status(400).json({
                    message: err.message || 'Unxpected error'
                })
            }
            
            return
        }
}