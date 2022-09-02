import {Item, itemModel} from "../models/item";

export const ItemsService = {
    async createItem(item: Item): Promise<Item> {
        return await itemModel.model.create(item);
    },

    async getAllItems(): Promise<Item[]> {
        return await itemModel.model.find();
    },

    async getSingleItem(id:string): Promise <Item | undefined | null> {
        return await itemModel.model.findOne({_id: id});
    }
}
