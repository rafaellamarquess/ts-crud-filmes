import { Router } from 'express';
const router = Router();
import { getDirectors, createDirector } from '../controllers/diretorController';

router.post('/addDirector', createDirector);
router.get('/listDirectors', getDirectors);

export default router;