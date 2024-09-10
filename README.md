#Atividade 2 - Desafio - Desenvolvimento de API para Operações de CRUD

# Simple Task API

Uma API simples para gerenciar tarefas (CRUD) desenvolvida em Node.js usando Express. Esta API permite criar, ler, atualizar e excluir tarefas.

## Índice

- [Sobre](#sobre)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Endpoints da API](#endpoints-da-api)
- [Exemplos de Requisições](#exemplos-de-requisições)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Sobre

Esta API fornece operações básicas para gerenciar tarefas. As principais funcionalidades incluem:

- **Criar** uma nova tarefa
- **Ler** todas as tarefas ou uma tarefa específica
- **Atualizar** uma tarefa existente
- **Deletar** uma tarefa

## Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado: versão 14 ou superior)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Instalação

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/simple-task-api.git
    cd simple-task-api
    ```

2. **Instale as dependências:**

    ```bash
    npm install
    ```

3. **Inicie o servidor:**

    ```bash
    node index.js
    ```

    O servidor estará rodando em `http://localhost:3000`.

## Uso

Você pode interagir com a API usando ferramentas como [Postman](https://www.postman.com/) ou `curl`.

## Endpoints da API

### Criar uma tarefa

- **Método:** `POST`
- **URL:** `/tasks`
- **Cabeçalhos:** 
  - `Content-Type: application/json`
- **Corpo da Requisição:**
  
  ```json
  {
    "title": "Título da Tarefa",
    "description": "Descrição da Tarefa"
  }
```
- **Resposta::**
  ```
{
  "id": 1,
  "title": "Título da Tarefa",
  "description": "Descrição da Tarefa"
}
```
