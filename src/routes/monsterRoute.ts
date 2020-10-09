//Aula 06
import { Router } from 'express';
import monsterController from '../controllers/monsterController';

const router = Router();

router.get('/', (req, res) => {
    monsterController.getAll(req, res);
});
router.get('/getApi/:id', (req, res) => {
    monsterController.getOneApi(req, res);
});
router.get('/formNew', (req, res) => {
    res.render('monsterFormNew', { error: '' });
});
router.post('/', (req, res) => {
    monsterController.insert(req, res);
});
router.get('/:id', (req, res) => {
    monsterController.getOne(req, res);
});
router.post('/update/:id', (req, res) => {
    monsterController.update(req, res);
});
router.get('/delete/:id', (req, res) => {
    monsterController.delete(req, res);
})

export default router;