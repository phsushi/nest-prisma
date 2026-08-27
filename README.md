# 🚀 NestJS + Prisma API

## 📌 Sobre o projeto

API REST desenvolvida para aprofundar conhecimentos em backend com **NestJS**, **Prisma** e banco de dados relacional. Simula um sistema de gerenciamento com usuários, produtos e pedidos, aplicando arquitetura modular, autenticação e boas práticas.

---

## 🛠️ Tecnologias

Node.js · NestJS · Prisma ORM · SQLite · JWT · Bcrypt · Swagger

---

## 🧱 Arquitetura

Arquitetura modular seguindo o padrão do NestJS, organizada **por sub-domínio** (usuários, produtos, pedidos), não por camada técnica:

- **Controllers** → rotas e entrada de dados
- **Services** → regras de negócio
- **DTOs** → validação e tipagem (`class-validator`)
- **Prisma** → camada de acesso ao banco
- **Guards** → autenticação

---

## 🎯 Decisões técnicas e trade-offs

**NestJS em vez de Express puro.** Nest é mais opinativo e já resolve injeção de dependência, módulos e estrutura — trade-off é uma curva de aprendizado maior no início, mas ganha em manutenibilidade conforme o projeto cresce.

**Prisma como ORM.** Facilita a portabilidade entre bancos: trocar de SQLite para Postgres, por exemplo, não exige reescrever a camada de dados — só ajustar a connection string e rodar as migrations. Também traz migrations versionadas de graça.

**TypeScript em vez de JavaScript.** Tipagem estrita em backend reduz bugs de contrato entre camadas, e interfaces/tipos tornam a manutenção mais segura em um projeto que tende a crescer em número de módulos.

---

## 🔐 Autenticação e autorização

- **Autenticação:** JWT para geração/validação de token + bcrypt para hash de senha. Login retorna token, rotas protegidas usam `AuthGuard`.
- **Autorização:** ainda não implementada. O design previsto usa **Roles** (ex.: só usuários com role `VENDEDOR` podem criar produto) — próximo passo natural sobre a base de auth já existente.

---

## 📦 Funcionalidades

- **Usuários:** criação, login, visualização de perfil
- **Produtos:** criação, atualização, exclusão
- **Pedidos:** criação relacionando usuários e produtos

---

## 🧪 Testes

Ainda não implementados (existem os arquivos `.spec` gerados pelo Nest, mas sem cobertura real). Próximo passo: testes de integração com Jest + Supertest cobrindo o fluxo de autenticação.

---

## 🐳 Docker & CI/CD

- `Dockerfile` e `docker-compose` configurados
- Pipeline de CI/CD com deploy automático no DockerHub

---

## 📄 Documentação da API

Gerada automaticamente com Swagger: `http://localhost:3000/api`

---

## ▶️ Como rodar

```bash
git clone https://github.com/phsushi/nest-prisma.git
npm install
npx prisma migrate dev
npx prisma generate
npm run start:dev
```


