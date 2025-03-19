import { Router } from "express";
import { TodoModel } from "../models/Todo"; //importando o objeto criado em todo
import { json } from "stream/consumers";

const router = Router()

router.get("/", async (req, res) => {
  try {
    const todos = await TodoModel.find()
    res.json(todos)
  } catch (error) {
    res.status(500).json({error: "Erro ao buscar dados"})
  }
})

export default router;

