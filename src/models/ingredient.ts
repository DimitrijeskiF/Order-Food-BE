import {Schema, Model, model, Document} from 'mongoose';

export interface Ingredient extends Document {
    name: string,
    type: string
}


const IngredientSchema: Schema = new Schema(
    {
        name: String,
        type: String
    },
    {
        timestamps: true
    }
)

export class IngredientModel {
    private _model: Model<Ingredient>;

    constructor() {
        this._model = model<Ingredient>('Ingredient', IngredientSchema);
    }

    get model(): Model<Ingredient> {
        return this._model;
    }
}

export const itemModel = new IngredientModel();

