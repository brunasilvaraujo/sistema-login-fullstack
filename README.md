# Sistema de Login Fullstack

Um sistema completo de autenticação com frontend em Vue.js 3 e backend em Node.js com TypeScript.

## 🚀 Tecnologias

### Backend

- **Node.js** com **TypeScript**
- **Express.js** - Framework web
- **Sequelize** - ORM para banco de dados
- **MySQL** - Banco de dados
- **JWT** - Autenticação via tokens
- **Bcrypt** - Hash de senhas
- **Docker** - Containerização

### Frontend

- **Vue.js 3** com **TypeScript**
- **Vue Router** - Roteamento
- **Pinia** - Gerenciamento de estado
- **Axios** - Cliente HTTP
- **Vite** - Build tool

## 📁 Estrutura do Projeto

```text
sistema-login-fullstack/
├── backend-api/           # API backend
│   ├── src/
│   │   ├── controllers/   # Controladores
│   │   ├── services/      # Serviços
│   │   ├── models/        # Modelos do banco de dados
│   │   ├── middleware/    # Middlewares
│   │   ├── database/      # Configurações e migrations
│   │   └── routes.ts      # Rotas da API
│   └── docker-compose.yml # Configuração do banco
└── frontend-login/        # Frontend Vue.js
    ├── src/
    │   ├── components/    # Componentes Vue
    │   ├── router/        # Configuração de rotas
    │   ├── service/       # Serviços de API
    │   └── types/         # Tipos TypeScript
    └── index.html
```

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js (versão 18+)
- Docker e Docker Compose
- Git

### 1. Clone o repositório

```bash
git clone https://github.com/brunasilvaraujo/sistema-login-fullstack.git
cd sistema-login-fullstack
```

### 2. Configuração do Backend

```bash
# Entre na pasta do backend
cd backend-api

# Instale as dependências
npm install

# Configure o banco de dados com Docker
npm run db:docker

# Execute as migrations
npm run db:migrate

# Inicie o servidor de desenvolvimento
npm run dev
```

O backend estará rodando em `http://localhost:3333`

### 3. Configuração do Frontend

```bash
# Em um novo terminal, entre na pasta do frontend
cd frontend-login

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O frontend estará rodando em `http://localhost:5173`

## 🔑 Funcionalidades

- ✅ **Registro de usuários** - Criação de conta com validação
- ✅ **Login/Logout** - Autenticação segura com JWT
- ✅ **Proteção de rotas** - Middleware de autenticação
- ✅ **Perfil do usuário** - Visualização de dados do usuário logado
- ✅ **Hash de senhas** - Segurança com bcrypt
- ✅ **Validação de dados** - Middleware de validação
- ✅ **Banco de dados** - PostgreSQL com Sequelize ORM

## 📚 Scripts Disponíveis

### Scripts do Backend

```bash
npm run dev          # Inicia o servidor em modo desenvolvimento
npm run db:docker    # Inicia o banco PostgreSQL com Docker
npm run db:migrate   # Executa as migrations
npm run migrate:rollback  # Desfaz a última migration
```

### Scripts do Frontend

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Cria build de produção
npm run preview      # Preview do build de produção
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
