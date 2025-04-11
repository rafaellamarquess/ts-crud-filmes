const Director = require('../models/diretorModel');

const createDirector = async (req, res) => {
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

const getDirectors = async (req, res) => {
  try {
    const diretores = await Director.find();
    res.json(diretores);
  } catch (error) {
    console.error('Erro ao buscar diretores:', error);
    res.status(500).json({ error: 'Erro ao buscar diretores' });
  }
};

module.exports = { getDirectors, createDirector };