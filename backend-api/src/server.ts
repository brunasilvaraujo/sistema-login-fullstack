import express from 'express';
import { routes } from './routes.ts';
import { sequelize } from './database/index.ts';
import cors from 'cors';

const app = express();

app.use(cors(
  {
    origin: process.env.URL_APP, // Substitua pela URL do seu frontend
  }
));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", routes);

app.listen(process.env.PORT, () => {
  sequelize.authenticate().then(() => {
    console.log("Database connected");
  }).catch((err) => {
    console.error("Database connection error:", err);
  });

  console.log("Server is running on http://localhost:" + process.env.PORT);
})