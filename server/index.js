require('dotenv').config();
const express = require('express');
const massive = require('massive');
const todoCtrl = require('./controllers/todoCtrl');

const { PORT, CONNECTION_STRING } = process.env;

const app = express();
app.use(express.json());

app.get('/api/todos', todoCtrl.getAllTodos);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
}).then(dbInstance => {
  app.set('db', dbInstance);
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});