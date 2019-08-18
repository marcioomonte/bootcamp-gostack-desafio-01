const express = require('express');

const app = express();

app.use(express.json());

const projects = [];
let count = 0;

function projectExists(req, res, next) {
  const { id } = req.params;
  const project = projects.find(project => project.id === id);
  return project
    ? next()
    : res.status(400).json({ error: 'Project does not exists!' });
}

app.use((req, res, next) => {
  count++;
  console.time(`Request - ${count} - made in:`);

  console.log(`Method: ${req.method}; URL: ${req.url}`);
  next();
  console.timeEnd(`Request - ${count} - made in:`);
});

app.post('/projects', (req, res) => {
  projects.push(req.body);
  return res.status(200).json({ message: 'Project added!' });
});

app.get('/projects', (req, res) => {
  return res.json({ projects: projects });
});

app.put('/projects/:id', projectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(project => project.id === id);

  project.title = title;

  return res.status(200).json({ message: `Project id: ${id} updated!` });
});

app.delete('/projects/:id', projectExists, (req, res) => {
  const { id } = req.params;

  const index = projects.findIndex(project => project.id === id);

  projects.splice(index, 1);

  return res.status(200).json({ message: `Project id: ${id} deleted!` });
});

app.post('/projects/:id/tasks', projectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(project => project.id === id);

  project.tasks.push(title);
  return res
    .status(200)
    .json({ message: `Project's id: ${id} tasks created!` });
});

app.listen(3000);
