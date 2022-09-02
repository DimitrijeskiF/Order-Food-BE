import {Ingredient} from "./ingredient";
import { Schema, Model, model, Document } from 'mongoose';

export interface Item extends Document {
    id: number,
    name: string,
    imgLink:string,
    ingredients: Ingredient
}


const ItemSchema: Schema = new Schema(
    {
        name: String,
        imgLink:String,
        ingredients: [Object]
    },
    {
        timestamps: true
    }
)

export class ItemModel {
    private _model: Model<Item>;

    constructor() {
        this._model = model<Item>('Item', ItemSchema);
    }

    get model(): Model<Item> {
        return this._model;
    }
}

export const itemModel = new ItemModel();

