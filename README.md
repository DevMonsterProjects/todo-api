# TODO Api

This is a simple api which runs a server which can be run locally. It opens endpoint to crete, update, delete and get todos.
## Getting Started
---
1) Installing dependencies

    ```
    npm install
    # OR
    yarn install
    ```
2) Configuration

    Create a file in root called `.env` 
    
    Create Environment variables refering to env.example file in the repository.
    
    Example:
    ```
    PORT=4000
    NODE_ENV=development
    DB=mongodb://localhost:27017/todoapp
    ```
    > Make Sure you have mongoDB installed locally if you want to use Mongodb locally.

    > You can edit the server.ts file if you want to connect to a online database.

3) Running Server
    ```
    # Running in development with hot reloading
    
    npm run dev
    # OR
    yarn run dev 

    # Running in production without hot reloading
    
    npm start
    # OR
    yarn start

    # Building code

    npm run build    
    # OR
    yarn run build
    ```
    
## Api Docs
---

- [Get All Todos](docs/get.md) : `GET /api/v1/todo`
- [Create A Todo](docs/post.md) : `POST /api/v1/todo`
- [Update A Todo](docs/patch.md) : `PATCH /api/v1/todo/:id`
- [Delete Todo](docs/delete.md) : `DELETE /api/v1/todo/:id`    