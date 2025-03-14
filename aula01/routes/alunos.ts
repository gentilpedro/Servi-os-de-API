import { Router } from "express";

const router = Router();

//aqui temos registros feitos a mão em fortmato json    
const alunos = [
    {
        "id": 1,
        "nome": "Pedro",
        "idade": 20,
        "curso": "ADS"
    },
    {
        "id": 2,
        "nome": "Angelica",
        "idade": 21,
        "curso": "ADS"
    },
    {
        "id": 3,
        "nome": "Adriane Bom",
        "idade": 56,
        "curso": "Pedagogia"
    }
];

router.get("/", (req, res) => {
    res.status(200).json(alunos);
});

router.post("/", (req, res) => {
    const { nome, idade, curso } = req.body;
    alunos.push({
        id: alunos.length + 1,
        nome,
        idade,
        curso
    })
    res.status(201).json({ msg: "Ok! Inserido com sucesso", id: alunos.length });


})

router.delete("/:id", (req, res) => {
    const id = req.params.id;

    const index = alunos.findIndex((aluno) => aluno.id === Number(id));
    if (index === -1 || index === 0) {
        res.status(404).json({ msg: "Aluno não encontrado" });
    }else{
        alunos.splice(index, 1);
        res.status(204).send();
    }

});

export default router;