import { Request, Response } from "express";
import pool from "../database";

class BasketsControllers {
    public async getBasket(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        const answer = await pool.query(`SELECT 
            BakeryItems.name, BakeryItems.price, Baskets.quantity
            FROM Baskets
            JOIN BakeryItems ON Baskets.product_id = BakeryItems.id
            WHERE Baskets.client_id = ?;`, [id]);
        if(answer.length > 0) {
            res.json(answer[0]);
            return;
        }
        res.status(404).json({'message':'El carrito se encuentra vacio!'});
    }
}

export const basketsControllers = new BasketsControllers();