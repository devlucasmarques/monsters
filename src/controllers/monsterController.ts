//Aula 06
import { Request, Response } from 'express';
import Monster from '../models/monster';
import { isValidObjectId } from 'mongoose';

class MonsterController {
    public async getAll(req: Request, res: Response): Promise<void> {
        const monsters = await Monster.find({});
        return res.render('monsters', { monsters });
    }
    public async insert(req: Request, res: Response): Promise<void> {
        await Monster.create(req.body);
        return res.redirect('monsters');
    }
    public async getOne(req: Request, res: Response): Promise<void> {
        const id = req.params['id'];
        if (isValidObjectId(id)) {
            const monster = await Monster.findById(id);
            if (monster) return res.status(200).render('monsterFormEdit', { monster });
            else res.status(404).render('monsters', { erro: 'Monster não encontrado!' });
        }
        else return res.status(400).render('monsters', { erro: 'Sintaxe do parametro incorreta!' });
    }
    public async getOneApi(req: Request, res: Response): Promise<Response> {
        const id = req.params['id'];
        if (isValidObjectId(id)) {
            const monster = await Monster.findById(id);
            if (monster) return res.status(200).json(monster);
            else return res.status(404).json({ erro: 'Monster não encontrado!' });
        }
        else return res.status(400).json({ erro: 'Sintaxe do parametro incorreta!' });
    }
    public async update(req: Request, res: Response): Promise<void> {
        const _id = req.params['id'];
        if (isValidObjectId(_id)) {
            const monster = await Monster.findByIdAndUpdate({ _id }, req.body);
            if (monster) return res.redirect('/monsters');
            else return res.status(404).render('monsters', { erro: 'Monster não encontrado!' });
        }
        else res.status(400).render('monsters', { erro: 'Sintaxe do parametro incorreta!' });
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const _id = req.params['id'];
        if (isValidObjectId(_id)) {
            const monster = await Monster.findByIdAndDelete(_id);
            if (monster) return res.redirect('/monsters');
            else return res.status(404).render('monsters', { erro: 'Monster não encontrado!' });
        }
        else return res.status(400).render('monsters', { erro: 'Sintaxe do parametro incorreta!' });
    }
}

export default new MonsterController;