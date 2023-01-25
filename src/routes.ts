import { Router } from "express";
import { createContactController } from "./useCases/CreateContact";

const router = Router();

router.post('/user', (req, res) => {
    return createContactController.handle(req, res)
});

export {router}