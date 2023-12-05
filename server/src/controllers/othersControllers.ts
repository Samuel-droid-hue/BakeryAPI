import { Request, Response } from "express";
import pool from "../database";

class OthersControllers {
    public async getIngredients(req: Request, res: Response): Promise<void> {
        const answer = await pool.query('SELECT * FROM Ingredient');
        res.json(answer);
    }

    public async getCategories(req: Request, res: Response): Promise<void> {
        const answer = await pool.query('SELECT * FROM BreadCategory');
        res.json(answer)
    }
}

export const othersControllers = new OthersControllers();