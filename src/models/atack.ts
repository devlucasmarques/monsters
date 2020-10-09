//Aula 03
import { model, Schema, Document } from 'mongoose';
import { TypeMonster } from '../types/index';

interface IAtack extends Document {
    name: string,
    damage: number,
    energy: number,
    type: TypeMonster
}

const Atack = new Schema({
    name: String,
    damage: Number,
    energy: Number,
    type: Number
});

export default model<IAtack>('Atack', Atack);
