<h1 align="center">
<br>
Space Flight New Server
</h1>

### Documentação

É possível acessar a documentação OAS 3.0 pelo link: https://app.swaggerhub.com/apis-docs/lucasmelniski/SpaceFlightNew/1.0.0

### Funcionalidades

- Popular o banco.
- Buscar articles, limitados a 10, com busca por title e ordeção de mais antigo para mais novo e mais novo para mais antigo.
- Criar, editar e deletar um article.

## 🛠 Tecnologias utilizadas

- 🛠 **Express** 
- 🛠 **TypeOrm** 
- 🛠 **MongoDB** 

## 🚀 Rodando o projeto

### Pré-requisitos

- Postman (ou similar)
- NodeJS

### 💻 Rodando

Instale as dependências

```bash
npm install
```

Após instalar as dependências, crie um arquivo .env seguindo o exemplo do .env.example

As configurações com prefixo TYPEORM são do mongoDB
A API_KEY é a chave de acesso para requisição
É possivel configurar a porta em que o projeto será executado

Após configurado é possível iniciar o projeto

```bash
npm run dev
```

____

É possivel rodar o projeto utilizando Docker

```bash
docker-compose build
```

Após gerar o build

```bash
docker-compose up
```

# Após isso a aplicação pode ser utilizada acessando o endereço http://localhost:PORT

## 🛠 Endpoints

### Running

É possível usar o caminho 

```bash
Method: GET
/
```

para verificar se a aplicação está rodando, deve se receber o retorno 'Fullstack Challenge 2021 🏅 - Space Flight News'

### Seed

É possível usar o caminho 

```bash
Method: POST
/articles/seed/all
```

para buscar todos os articles registrados na api de inspiração: https://api.spaceflightnewsapi.net/v3/documentation e registra-los no banco de dados do projeto.

### Articles

É possível usar o caminho 

```bash
Method: GET
/articles/
```

para buscar 10 articles.

E

```bash
Method: GET
/articles/?page={page}&title={title}&sort={sort}
```

Para fazer uma busca com parametros, onde page é a escolha da página começando em 0, title busca por algum title contendo a busca e sort podendo ser ASC ou DESC

É possível usar o caminho 

```bash
Method: GET
/articles/{articleId}
```

para buscar o article correspondente a o articleId


E 

```bash
Method: PUT
/articles/{articleId}
```

para editar o article correspondente a o articleId

E 

```bash
Method: DELETE
/articles/{articleId}
```

para deletar o article correspondente a o articleId

E 

```bash
Method: POST
/articles/
```

para criar um article

