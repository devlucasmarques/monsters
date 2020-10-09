//Aula 04
import { Router } from 'express';
import atackController from '../controllers/atackController';

const router = Router();

router.get('/', (req, res) => {
    atackController.getAll(req, res);
});
router.get('/getApi', (req, res) => {
    atackController.getAllApi(req, res);
});
router.get('/formNew', (req, res) => {
    res.render('atackFormNew', { error: '' });
});
router.get('/:id', (req, res) => {
    atackController.getOne(req, res);
});
router.post('/', (req, res) => {
    atackController.insert(req, res);
});
router.post('/update/:id', (req, res) => {
    atackController.edit(req, res);
});
router.get('/delete/:id', (req, res) => {
    atackController.delete(req, res);
});

export default router;