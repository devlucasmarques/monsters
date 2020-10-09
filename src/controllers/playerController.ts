//Aula 08
import { Request, Response } from 'express';
import Player, { IPlayer } from '../models/player';
import { isValidObjectId } from 'mongoose';

class PlayerController {
    public async getAll(req: Request, res: Response): Promise<void> {
        const players = await Player.find({});
        return res.render('players', { players });
    }
    public async insert(req: Request, res: Response): Promise<void> {
        const { username, password, confirmPassword, name } = req.body
        if (password === confirmPassword) {
            const player = await Player.find({ username });
            if (player.length == 0) {
                const ruby = 100;
                const money = 1000;
                const numberVictory = 0;
                const newPlayer = <IPlayer>{ name, username, password, numberVictory, money, ruby };
                await Player.create(newPlayer);
                return res.status(201).render('index', { error: '' });
            }
            else return res.status(400).render('playerFormNew', { error: 'Player já cadastrado' });
        }
        else return res.status(400).render('playerFormNew', { error: 'A confirmação da senha está diferente' });
    }
    public async getOne(req: Request, res: Response): Promise<void> {
        const id = req.params['id'];
        if (isValidObjectId(id)) {
            const player = await Player.findById(id);
            if (player) return res.status(200).render('playerDetail', { player, error: '' });
            else return res.status(404).render('playerDetail', { error: 'Player não encontrado!' });
        }
        else return res.status(400).render('playerDetail', { error: 'Sintaxe do parametro incorreta!' });
    }
    public async update(req: Request, res: Response): Promise<Response> {
        const _id = req.params['id'];
        if (isValidObjectId(_id)) {
            const player = await Player.findByIdAndUpdate({ _id }, req.body);
            if (player) return res.send(req.body);
            else return res.status(404).send('Player não encontrado!');
        }
        else return res.status(400).send('Sintaxe do parametro incorreta!');
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const _id = req.params['id'];
        if (isValidObjectId(_id)) {
            const player = await Player.findByIdAndDelete(_id);
            if (player) return res.redirect('/players');
            else return res.status(404).render('players', { error: 'Player não encontrado!' });
        }
        else return res.status(400).render('players', { error: 'Sintaxe inválida' });
    }

    public async auth(req: Request, res: Response): Promise<void> {
        const player = await Player.find(req.body);
        //console.log(player);

        if (player.length > 0) return res.render('main');
        else return res.status(401).render('index', { error: 'Usuário/senha inválidos' });

    }
}

export default new PlayerController;