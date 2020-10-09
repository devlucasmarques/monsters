//Aula 04

import { Request, Response } from 'express';
import Atack from '../models/atack';
import { isValidObjectId } from 'mongoose'

class AtackController {
    public async getAll(req: Request, res: Response): Promise<void> {
        const atacks = await Atack.find({});
        if (atacks) return res.render('atacks', { atacks, error: '' });
        else return res.render('atacks', { error: 'Documento vazio'});
    }
    public async getAllApi(req: Request, res: Response): Promise<Response> {
        const atacks = await Atack.find({});
        return res.json(atacks);        
    }
    public async getOne(req: Request, res: Response): Promise<void> {
        const _id = req.params['id'];
        if (isValidObjectId(_id)) {
            const atack = await Atack.findOne({ _id });
            if (atack) return res.render('atackFormEdit', { atack });
            else return res.status(404).render('atacks', { error: 'Atack não encontrado!' });
        }
        else res.status(400).render('atacks', { error: 'Sintaxe inválida' });
    }
    public async insert(req: Request, res: Response): Promise<void> {
        const atack = await Atack.create(req.body);
        return res.redirect('atacks');
    }
    public async edit(req: Request, res: Response): Promise<void> {
        const _id = req.params['id'];
        if (isValidObjectId(_id)) {
            const atack = await Atack.findOneAndUpdate({ _id }, req.body);
            if (atack) return res.redirect('/atacks')            ;
            else return res.status(404).render('atacks', { error: 'Atack não encontrado!' });
        }
        else res.status(400).render('atacks', { error: 'Sintaxe inválida' });
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const _id = req.params['id'];
        if (isValidObjectId(_id)) {
            const atack = await Atack.findOneAndDelete({ _id });
            if (atack) return res.redirect('/atacks')            
            else return res.status(404).render('atacks', { error: 'Atack não encontrado!' });
        }
        else return res.status(400).render('atacks', { error: 'Sintaxe inválida' });
    }
}

export default new AtackController;