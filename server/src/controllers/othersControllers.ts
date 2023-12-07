import { Request, Response } from "express";
import pool from "../database";

class OthersControllers {
    public async getCategories(req: Request, res: Response): Promise<void> {
        const answer = await pool.query('SELECT * FROM CategoriesItems');
        res.json(answer)
    }
}

export const othersControllers = new OthersControllers();