#  Chapter II - Desafio 01 e 02: Introdução ao SOLID e Documentando com Swagger :rocket: :purple_heart:

## :dart: Objetivo

01: Criar uma aplicação de listagem e cadastro de usuários utilizando os conceitos de SOLID aprendidos.

02: Documentar as rotas utiliando o Swagger.

## :white_check_mark: Requisitos

### Rotas da aplicação
- [x] POST /users
- [x] PATCH /users/:user_id/admin
- [x] GET /users/:user_id
- [x] GET /users/:user_id

### Específicação dos testes

#### Teste do model
- [x] Should be able to create an user with all props

#### Testes do repositório
- [x] Should be able to create new users
- [x] Should be able to list all users
- [x] Should be able to find user by ID
- [x] Should be able to find user by e-mail address
- [x] Should be able to turn an user as admin

##### Testes de useCases
- [x] Should be able to create new users
- [x] Should not be able to create new users when email is already taken
- [x] Should be able to turn an user as admin
- [x] Should not be able to turn a non existing user as admin
- [x] Should be able to get user profile by ID
- [x] Should not be able to show profile of a non existing user
- [x] Should be able to list all users
- [x] Should not be able to a non admin user get list of all users
- [x] Should not be able to a non existing user get list of all users

## :computer: Instalação ##

```bash
# Clone este repositório
$ git clone https://github.com/Thifany-Nicastro/IgniteNode-ChapterII-Desafio01.git

# Entre na pasta
$ cd IgniteNode-ChapterII-Desafio01

# Instale as dependências
$ yarn ou yarn install

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:3333
acesse <http://localhost:3333>
```
