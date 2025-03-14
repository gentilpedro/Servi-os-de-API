import express from 'express';
import alunosRoutes from './routes/alunos';

const app = express();
const port = 3000;

app.use(express.json());

app.use("/alunos", alunosRoutes);


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/sala', (req, res) => {
    res.send('Aula de desenvovimento de apis 205 predio TECH    !');
});

app.listen(port, () => {
    console.log(`Servidor em execução na porta ${port}`);
});