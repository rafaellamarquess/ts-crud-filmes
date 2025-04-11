import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import filmRoutes from './routes/filmRoutes.js';
import directorsRoutes from './routes/directorsRoutes.js';
const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost:27017/filmesdb';

// Middleware
app.use(cors());
app.use(json());

// Conexão com o Banco de Dados
connect(MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Rotas
app.use('/api/film', filmRoutes);
app.use('/api/director', directorsRoutes);


// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});