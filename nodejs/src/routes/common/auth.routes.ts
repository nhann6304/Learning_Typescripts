import express, { Request, Response } from "express";
import { people } from "../../data/data";
import { create } from "../../controller/auth.controller";

const router = express.Router();

router.post("/create", create);

router.patch("/update/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    const personal = people.find((item) => item.id === +id);

    const newPeople = people.map((item) => {
        if (personal.id === item.id) {
            item.name = name;
        }
        return item;
    });

    res.status(200).send({
        id,
        name,
        newPeople,
    });
});

router.delete("/delete/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const newPeople = people.filter((item) => item.id !== +id);
    res.status(200).send({
        newPeople,
    });
});

export default router;