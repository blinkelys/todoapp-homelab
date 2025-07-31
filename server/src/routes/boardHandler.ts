import express, {Request, Response } from "express";
import Board from "../models/board";

const router = express.Router();

router.post("/boards", async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    // Count current number of boards
    const boardCount = await Board.countDocuments();

    const board = new Board({
      name,
      orderId: boardCount + 1,
    });

    await board.save();
    res.status(201).json(board);
  } catch (error) {
    res.status(500).json({ error: "Failed to create board" });
  }
});

router.get("/boards", async (req: Request, res: Response) => {
  try {
    const boards = await Board.find();
    res.status(200).json(boards);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve boards" });
  }
});

router.get("/boards/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    const board = await Board.findById(id);
    if (!board) {
      return res.status(404).json({ error: "Board not found" });
    }
    res.status(200).json(board);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve board" });
  }
});

router.put("/boards/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const board = await Board.findByIdAndUpdate(id, { name }, { new: true });
    if (!board) {
      return res.status(404).json({ error: "Board not found" });
    }
    res.status(200).json(board);
  } catch (error) {
    res.status(500).json({ error: "Failed to update board" });
  }
});

router.delete("/boards/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const board = await Board.findByIdAndDelete(id);
        if (!board) {
            return res.status(404).json({ error: "Board not found" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: "Failed to delete board" });
    }
});