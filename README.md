# API REST com NodeJS

## Desafio 01 do Bootcamp [Rocketseat](https://github.com/Rocketseat)

###Para utilização:

```bash
yarn dev
```

Rotas:

`GET /projects :` Lista todos os projetos e tarefas;

`POST /projects :` Cria um projeto na lista - formato: { id: "1", title: 'Novo projeto', tasks: [] };

`PUT /projects/:id :` Altera apenas o título do projeto com o id presente nos parâmetros da rota;

`DELETE /projects/:id :` Deleta o projeto com o id presente nos parâmetros da rota;

`POST /projects/:id/tasks :` Recebe um campo title e armazena uma nova tarefa no array de tarefas de um projeto específico escolhido através do id presente nos parâmetros da rota;

- CRUD de uma lista de projetos e tasks em projetos
  - utilização do express
  - atualização automática em desenvolvimento usando nodemon
  - middleware de verificação
