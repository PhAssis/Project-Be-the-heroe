const express = require('express');
const cors = require('cors')
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

// Rota / Recurso

// Métodos HTTP:

// GET: Buscar/Listar uma informação do back - end 
// POST: Criar uma informação no back - end  
// PUT: Alterar uma informação no back - end
// DELETE: Deletar uma informação no back-end

// Query Params: Parametros nomeados enviados na rota após "?" (filtros, paginação)
// Route Params: Parametros utilizados para identificar recursos
// Request body: Corpo da requisição, utilizado para criar ou alterar recursos

