import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.status(201).send();
});

export {router}