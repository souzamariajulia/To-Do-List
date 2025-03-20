import { Router, Request, Response } from "express";  
import { TodoModel } from "../models/Todo";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const todos = await TodoModel.find(); 
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ message: "Título é obrigatório" });
  }
  
  const newTodo = new TodoModel({ title, completed: false });

  try {
    
    await newTodo.save();

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Erro ao salvar tarefa" });
  }
});

export default router;
