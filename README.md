# CRUD com autenticação JWT para algumas rotas e senha HASH

Objetivo da aplicação é desenvolver uma API RESTful para cadastro de usuários com autenticação jwt e senha hash

## Tecnologias utilizadas

- Express: É um framework para o desenvolvimento de aplicações utilizando o Node.
- BodyParser: É utilizado para converter o body para vários formatos, no caso da API, em JSON.
- Jsonwebtoken: Uma biblioteca usada para autenticação e autorização em certos aplicativos da web ou móvel.
- Bcrypt: Utilizado para criptografar as senhas criadas pelo ususário.
- MongoDB: Um sistema de gerenciamento de banco de dados não relacional.
- Mongoose: Foi utilizada para conectar a aplicação da API com o banco de dados do MongoDB.

## Instalando

Abra seu terminal e clone o repositório com o seguinte comando:

`$ git clone git@github.com:Mekusiad/crud-with-autentication.git`

Após isso, instale as dependênias:

`$ npm install `

### Rotas

- /signUp: Cadastro de usuários;
- /login: Utilizada para logar com usuário e senha;
- /getUsers: Buscar todos os usuários;
- /getUser: Buscar usuário específico(protegida por token);
- /putUser: Alterar dados de usuário(protegida por token);
- /deleteUser: Excluir usuário específico(protegida por token);

#### Estrutura para /signUp

```json
{
  "name": "name",
  "email": "name@name.com",
  "password": "password",
  "phone": { "number": "123456", "ddd": "91" }
}
```
