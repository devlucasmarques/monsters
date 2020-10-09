//Aula 08
import { Router } from 'express';
import playerController from '../controllers/playerController';

const router = Router();

router.get('/', (req, res) => {
    playerController.getAll(req, res);
});
router.get('/formNew', (req, res) => {
    res.render('playerFormNew', { error: '' });
});
router.post('/', (req, res) => {
    playerController.insert(req, res);
});
router.get('/:id', (req, res) => {
    playerController.getOne(req, res);
});
router.get('/update/:id', (req, res) => {
    playerController.update(req, res);
});
router.get('/delete/:id', (req, res) => {
    playerController.delete(req, res);
})
router.post('/auth', (req, res) => {
    playerController.auth(req, res);
});


export default router;