import { Schema, model, mongoose } from 'mongoose';


const filmeSchema = new Schema({
    nome: {type: String, require: true},
    sinopse: {type: String, require: true},
    anoLancamento: {type: String, require: true},
    diretor: { type: mongoose.Schema.Types.ObjectId, ref: 'Director', required: true }
})

const Filme = model('Film', filmeSchema);

export default Filme;