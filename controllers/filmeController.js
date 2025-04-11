import Filme from '../models/filmeModel.js';

// Criar filme
export async function createFilme(req, res) {
  try {
    const { nome, sinopse, anoLancamento, diretor } = req.body;

    if (!nome || !sinopse || !anoLancamento || !diretor) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    const novoFilme = new Filme({ nome, sinopse, anoLancamento, diretor });
    await novoFilme.save();

    res.status(201).json(novoFilme);
  } catch (err) {
    console.error("Erro ao criar filme:", err);
    res.status(500).json({ error: 'Erro ao criar filme. Verifique os dados enviados.' });
  }
}

// Listar todos os filmes
export async function getFilme(req, res) {
  try {
    const filmes = await Filme.find().populate('diretor', 'nome');
    res.status(200).json(filmes);
  } catch (err) {
    console.error("Erro ao listar filmes:", err);
    res.status(500).json({ error: 'Erro ao listar filmes.' });
  }
}

// Atualizar filme
export async function updateFilme(req, res) {
  try {
    const { nome, sinopse, anoLancamento, diretor } = req.body;

    if (!nome || !sinopse || !anoLancamento || !diretor) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios para atualização.' });
    }

    const updatedFilme = await Filme.findByIdAndUpdate(
      req.params.id,
      { nome, sinopse, anoLancamento, diretor },
      { new: true, runValidators: true }
    );

    if (!updatedFilme) return res.status(404).json({ error: 'Filme não encontrado.' });

    res.status(200).json(updatedFilme);
  } catch (err) {
    console.error("Erro ao atualizar filme:", err);
    res.status(400).json({ error: 'Erro ao atualizar filme. Verifique os dados.' });
  }
}

// Deletar filme
export async function deleteFilme(req, res) {
  try {
    const deletedFilme = await Filme.findByIdAndDelete(req.params.id);

    if (!deletedFilme) return res.status(404).json({ error: 'Filme não encontrado.' });

    res.status(200).json({ message: 'Filme excluído com sucesso.' });
  } catch (err) {
    console.error("Erro ao deletar filme:", err);
    res.status(400).json({ error: 'Erro ao excluir filme. Verifique o ID.' });
  }
}








// // Buscar por ID
// exports.getFilmeById = async (req, res) => {
//   try {
//     const filme = await Filme.findById(req.params.id).populate('diretor', 'nome');
//     if (!filme) return res.status(404).json({ error: 'Filme não encontrado.' });

//     res.status(200).json(filme);
//   } catch (err) {
//     console.error("Erro ao buscar filme:", err);
//     res.status(400).json({ error: 'ID inválido ou erro ao buscar filme.' });
//   }
// };