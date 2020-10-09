//Aula 04
import { Router } from 'express';
import atackRouter from './routes/atackRoute';
import monsterRouter from './routes/monsterRoute';//Aula 05
import playerRouter from './routes/playerRoute';//Aula 06

const router = Router();

router.use('/atacks', atackRouter);
router.use('/monsters', monsterRouter);//Aula 05
router.use('/players', playerRouter);//Aula 06

router.get('/*', (req, res) => {
    res.render('index', { error: '' });
});

export default router;