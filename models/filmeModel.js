import { Schema, model } from 'mongoose';

const filmeSchema = new Schema({
    nome: {type: String, require: true},
    sinopse: {type: String, require: true},
    anoLancamento: {type: String, require: true},
    diretor: { type: mongoose.Schema.Types.ObjectId, ref: 'Diretor', required: true }
})

const Filme = model('Filme', filmeSchema);

export default Filme;