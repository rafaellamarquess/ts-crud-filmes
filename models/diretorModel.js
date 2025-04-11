import { Schema, model } from 'mongoose';


const diretorSchema = new Schema({
  nome: { type: String, required: true }
});

export default model('Diretor', diretorSchema); 