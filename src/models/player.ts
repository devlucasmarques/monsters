//Aula 07
import { Schema, model, Document } from 'mongoose';

interface IChest {
    name: string,
    state: string,
    dateOpen: Date  
}
interface IAtack {
    id: string,
    name: string
}
interface IPlayerMonster {
    id: string,
    name: string,
    life: number,
    energy: number,
    level: number,
    exp: number,
    atacks: IAtack[]
}
export interface IPlayer extends Document {
    name: string,
    username: string,
    password: string,
    root: boolean,
    numberVictory: number,
    money: number,
    ruby: number,
    chest: IChest,
    monsters: IPlayerMonster[]
}

const Player = new Schema({
    name: String,
    username: String,
    password: String,
    root: Boolean,
    numberVictory: Number,
    money: Number,
    ruby: Number,
    timeMoney: Number,
    chest: [{
        name: String,
        state: String,
        dateOpen: Date
    }],
    monsters: [{
        id: Schema.Types.ObjectId,
        name: String,
        life: Number,
        energy: Number,
        level: Number,
        exp: Number,
        atacks: [{
            id: Schema.Types.ObjectId,
            name: String
        }],
    }]
})

export default model<IPlayer>('Player', Player);