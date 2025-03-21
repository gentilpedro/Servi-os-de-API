import { PrismaClient } from '@prisma/client';
import { Router } from 'express';


const prisma = new PrismaClient()   
const router = Router()

router.get("/", async (req, res)=> {
    const filme = await prisma.filme.findMany()
    res.status(200).json(filme)
})

router.post("/", async(req, res) => {
    const { titulo, genero, duracao, preco} = req.body;
    if( !titulo || !genero || !duracao || !preco) {
        res.status(400).json({error: "Informe todos os dados!"})
        return
    }
    const filme = await prisma.filme.create({
        data: {titulo, genero, duracao, preco}
    })

    res.status(201).json(filme)
})

export default router