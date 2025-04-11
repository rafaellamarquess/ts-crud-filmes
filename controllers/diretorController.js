import Director from '../models/diretorModel.js';

export const createDirector = async (req, res) => {
  try {
    const { nome } = req.body;
    const novoDiretor = new Director({ nome });
    await novoDiretor.save();
    res.status(201).json(novoDiretor);
  } catch (error) {
    console.error('Erro ao criar diretor:', error);
    res.status(500).json({ error: 'Erro ao criar diretor' });
  }
};

export const getDirectors = async (req, res) => {
  try {
    const directors = await Director.find();
    res.json(directors);
  } catch (error) {
    console.error('Erro ao buscar diretores:', error);
    res.status(500).json({ error: 'Erro ao buscar diretores' });
  }
};

export default { getDirectors, createDirector };