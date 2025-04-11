import { Router } from 'express';
const router = Router();
import { createFilme, getFilme, updateFilme, deleteFilme } from '../controllers/filmeController';

router.post('/addFilm', createFilme);
router.get('/listFilm', getFilme);
router.put('/:id', updateFilme);
router.delete('/:id', deleteFilme);

export default router;