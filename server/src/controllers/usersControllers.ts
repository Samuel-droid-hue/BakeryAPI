import { Request, Response } from "express";
import pool from "../database";

class UsersControllers {
    public async show_users(req: Request, res: Response): Promise<void> {
        const answer = await pool.query('SELECT * FROM users');
        res.json(answer);
    }

    public async show_user(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        const answer = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
        if(answer.length > 0) {
            res.json(answer[0]);
            return;
        }
        res.status(404).json({'message':'User not found!'});
    }

    public async new_user(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        const answer = await pool.query('INSERT INTO users set ?', [req.body, id]);
        res.json(answer);
    }

    public async update_user(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        const answer = await pool.query('UPDATE users SET ? WHERE id = ?', [req.body, id]);
        res.json(answer);
    }

    public async delete_user(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        const answer = await pool.query(`DELETE FROM users WHERE id = ${id}`);
        res.json(answer);
    }
}

export const usersControllers = new UsersControllers();