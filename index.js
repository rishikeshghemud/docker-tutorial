const express = require('express');
const app = express();
app.use(express.json());

let todos = [];

app.get('/', (req, res) => res.json(todos));

app.post('/todos', (req, res) => {
  const todo = { id: Date.now(), text: req.body.text };
  todos.push(todo);
  res.status(201).json(todo);
});

app.delete('/todos/:id', (req, res) => {
  todos = todos.filter(t => t.id !== parseInt(req.params.id));
  res.status(204).end();
});

app.listen(3000, () => console.log('✅ Server running on port 3000'));
