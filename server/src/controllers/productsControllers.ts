import { Request, Response } from "express";
import pool from "../database";

class ProductsControllers {
    public async getItems(req: Request, res: Response): Promise<void> {
        const answer = await pool.query('SELECT * FROM BakeryItems');
        res.json(answer);
    }

    public async getItem(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        const answer = await pool.query('SELECT * FROM Bread WHERE id = ?', [id]);
        if(answer.length > 0) {
            res.json(answer[0]);
            return;
        }
        res.status(404).json({'message':'Bread not found!'});
    }
}

export const productsControllers = new ProductsControllers();