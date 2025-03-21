import express from "express";
import filmesRoutes from './routes/filmes';

const app = express();
const port = 3000;

app.use(express.json())
app.use("/filmes", filmesRoutes)


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/aula', (req, res,) =>{
    res.send('Aula de Node.js')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});