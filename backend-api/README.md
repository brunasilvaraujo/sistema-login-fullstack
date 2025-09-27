# Backend Autendly (API REST)

API backend em Node.js com TypeScript, Express e Sequelize.

## 🚀 Instalação

```bash
npm install
```

## 🐳 Docker

```bash
# Subir banco MySQL
npm run db:docker
```

## 🗄️ Database

```bash
# Executar migrations
npm run db:migrate

# Desfazer última migration
npm run db:migrate:undo

# Gerar nova migration
npm run migration:generate -- --name nome-da-migration
```

## 🔧 Desenvolvimento

```bash
# Executar servidor
npm run dev
```

## 📁 Estrutura

```
src/
├── database/
│   ├── config/         # Configuração do banco
│   ├── migrations/     # Migrations
│   └── models/         # Modelos Sequelize
├── routes/             # Rotas da API
└── server.ts           # Servidor principal
```

## 🌐 Endpoints

- Servidor: `http://localhost:3000`
- Banco: `localhost:3306`

## 📋 Scripts

| Script                       | Descrição                       |
| ---------------------------- | ------------------------------- |
| `npm run dev`                | Inicia servidor desenvolvimento |
| `npm run db:docker`          | Sobe container MySQL            |
| `npm run db:migrate`         | Executa migrations              |
| `npm run db:migrate:undo`    | Desfaz última migration         |
| `npm run migration:generate` | Gera nova migration             |
