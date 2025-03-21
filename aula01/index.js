"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const alunos_1 = __importDefault(require("./routes/alunos"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use("/alunos", alunos_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/sala', (req, res) => {
    res.send('Aula de desenvovimento de apis 205 predio TECH    !');
});
app.listen(port, () => {
    console.log(`Servidor em execução na porta ${port}`);
});
