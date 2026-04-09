# 🚀 NestJS + Prisma API

## 📌 Sobre o projeto

Esta é uma API REST desenvolvida com o objetivo de aprofundar conhecimentos em desenvolvimento backend utilizando **NestJS**, **Prisma** e banco de dados relacional.

O projeto simula um sistema de gerenciamento com usuários, produtos e pedidos, aplicando conceitos de arquitetura modular, autenticação e boas práticas de desenvolvimento.

---

## 🛠️ Tecnologias utilizadas

- Node.js
- NestJS
- Prisma ORM
- SQLite
- JWT (Autenticação)
- Bcrypt (Hash de senha)
- Swagger (Documentação)

---

## 🧱 Arquitetura

A aplicação segue uma arquitetura modular baseada no padrão do NestJS:

- **Controllers** → Responsáveis pelas rotas e entrada de dados
- **Services** → Regras de negócio
- **DTOs** → Validação e tipagem de dados
- **Prisma** → Camada de acesso ao banco

Além disso:

- Uso de **Guards** para autenticação
- Validação com `class-validator`
- Separação por domínio (users, produtos, pedidos, etc.)

---

## 🔐 Autenticação

A autenticação é feita utilizando **JWT**, garantindo que apenas usuários autenticados possam acessar determinadas rotas.

- Login retorna um token JWT
- Rotas protegidas utilizam `AuthGuard`
- Senhas são armazenadas com hash utilizando bcrypt

---

## 📦 Funcionalidades

### 👤 Usuários

- Criação de usuário
- Login
- Visualização de perfil

### 🛍️ Produtos

- Criação
- Atualização
- Exclusão

### 📦 Pedidos

- Criação de pedidos relacionando usuários e produtos

---

## 📊 Banco de dados

O banco de dados foi modelado utilizando **Prisma**, com suporte a:

- Relacionamentos entre entidades
- Migrations versionadas
- Geração automática do client Prisma

---

## 📄 Documentação da API

A documentação das rotas é gerada automaticamente com Swagger:

👉 http://localhost:3000/api

---

## 🧪 Testes

Atualmente, os testes estão em desenvolvimento.

A API pode ser testada via:

- Swagger
- Postman
- Insomnia

## 🎯 Objetivo

Este projeto tem como foco:

- Evoluir habilidades em backend
- Aplicar boas práticas de arquitetura
- Trabalhar com autenticação e segurança
- Simular cenários próximos ao ambiente profissional

## ▶️ Como rodar o projeto

Clone o repositório:

```bash
git clone https://github.com/phsushi/nest-prisma.git
```

Instale as dependências:

```bash
npm install
```

Execute as migrations:

```bash
npx prisma migrate dev
```

Gere o client do Prisma:

```bash
npx prisma generate
```

Inicie o servidor:

```bash
npm run start:dev
```
