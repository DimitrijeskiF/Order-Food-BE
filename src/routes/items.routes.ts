import {ItemsService} from "../services/items.service";
import {Router, Request, Response} from 'express';
import {Item} from "../models/item";

const router = Router();


router.get('/', async (req: Request, res: Response) => {
    try {
        let items = await ItemsService.getAllItems()
        res.status(200).send(items);
    } catch (e) {
        res.status(400).send({msg: e})
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    const itemId = req.params.id;
    try {
        const item = await ItemsService.getSingleItem(itemId);
        res.send(item);
    } catch (e) {
        res.status(400).send({msg: e})
    }
});

router.post('/', async (req: Request, res: Response) => {
    const item: Item = req.body
    try {
        const itemCreated = await ItemsService.createItem(item);
        res.send(itemCreated);
    } catch (e) {
        res.status(400).send({msg: e})
    }
});


export const itemRouter = router;
