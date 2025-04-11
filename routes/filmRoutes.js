import { Router } from 'express';
const router = Router();
import { getFilmeById, createFilme, getFilme, updateFilme, deleteFilme } from '../controllers/filmeController.js';

router.post('/addFilm', createFilme);
router.get('/listFilm', getFilme);
router.get('/:id', getFilmeById);
router.put('/:id', updateFilme);
router.delete('/:id', deleteFilme);

export default router;