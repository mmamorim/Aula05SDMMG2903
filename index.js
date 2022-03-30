

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Oi gente....alguém fez uma requisição GET na rota /');
})

app.get('/teste', (req, res) => {
  res.send('<h3>Oi gente....alguém fez uma requisição GET na rota /teste</h3>');
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})