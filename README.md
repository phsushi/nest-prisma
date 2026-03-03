
### Introdução 

Uma simples API criada com o objetivo de aprimorar e manter meus conhecimentos com conceitos de backend com Nest e banco de dados relacional com prisma.

### Detalhes

Essa aplicação faz:

#### Usuários

- Criação
- Log In
- Visualização de perfil

Usando jwt e bcrypt para autenticação e hash de senhas, respectivamente. 

#### Produtos

Além disso, ela faz as principais manipulações de produtos:

- Criação
- Alteração
- Exclusão

### O principal, Pedidos

 Sua maior funcionalidade é a criação de pedidos que reúne todos os aspectos da aplicação, os usuários e os produtos. 
 
 
 
 Todas essas entidades são representadas em um banco de dados SQlite, criado por meio do schema do prisma.


### Documentação das rotas:

A documentação das rotas está sendo feita automaticamente por meio do swagger, quando iniciado o servidor na sua máquina acesse: [Swagger](http://localhost:3000/api)


### Rodando a aplicação

Para que você possa rodar a aplicação da sua máquina, de clone no projeto.

````bash
git clone https://github.com/phsushi/nest-prisma.git
`````

Depois entre na pasta do projeto e baixe as dependências node usando o comando `npm i`.

````bash
npm i
`````

Com as dependências instaladas, faça a migration do schema prisma para que os modelos possam ser interpretados e a criação do banco aconteça.

`````bash
npx prisma migrate dev 
`````

Depois use o comando `npx prisma generate` para que o PrismaService possa receber as alterações criadas pela migração.

`````bash
npx prisma generate
`````

### Testes

Com todos os passos concluídos, basta usar um cliente como o Postman e testar as rotas documentadas pelo swagger. Ou então, utilizar o próprio swagger para fazer os testes.