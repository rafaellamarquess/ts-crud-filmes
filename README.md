# 🎬 CRUD de Filmes

Aplicação simples para gerenciamento de filmes, com funcionalidades de cadastro, listagem, edição e exclusão. Desenvolvida em Node.js, Express e MongoDB no backend.

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- CORS
- JavaScript (ESM)
- Fetch API (frontend)

## Como rodar o projeto

1. **Clone o repositório**
   ```bash
   git clone https://github.com/rafaellamarquess/ts-crud-filmes
   cd backend
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Suba o servidor**
   ```bash
   npm run dev
   ```

4. O backend estará disponível em: `http://localhost:3000`

## Estrutura de Pastas

```
backend/
│
├── controllers/         # Lógica de controle (filmes e diretores)
├── models/              # Modelos Mongoose
├── routes/              # Rotas da API
├── app.js               # Ponto de entrada do servidor
```

## Endpoints

### Filmes
- `GET /api/film/listFilm`
- `GET /api/film/:id`
- `POST /api/film/addFilm`
- `PUT /api/film/:id`
- `DELETE /api/film/:id`

### Diretores
- `GET /api/director/listDirectors`
- `POST /api/director/addDirector`
