const express = require('express');
const app = express();
app.use(express.json());


let tasks = [];
let nextId = 1;


app.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }

  const task = { id: nextId++, title, description };
  tasks.push(task);
  res.status(201).json(task);
});


app.get('/tasks', (req, res) => {
  res.json(tasks);
});


app.get('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const task = tasks.find(t => t.id == id);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json(task);
});


app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const task = tasks.find(t => t.id == id);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  if (title) task.title = title;
  if (description) task.description = description;

  res.json(task);
});


app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(t => t.id != id);
  res.status(204).end();
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
