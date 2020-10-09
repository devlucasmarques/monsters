//Aula 05

import { model, Schema, Document } from 'mongoose';
import { TypeMonster } from '../types/index'

interface IAtackMonster {
    level: number,
    atack_id: string,
    atack_name: string
}

interface IMonster extends Document {
    name: string;
    type: TypeMonster;
    atack: number;
    defense: number;
    atacks: IAtackMonster[];
}

const Monster = new Schema({
    name: String,
    type: Number,
    atack: Number,
    defense: Number,
    atacks: [
        {
            level: Number,
            atack_id: Schema.Types.ObjectId,
            atack_name: String
        }
    ]
});

export default model<IMonster>('Monster', Monster);