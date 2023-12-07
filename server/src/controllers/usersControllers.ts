import { Request, Response } from "express";
import pool from "../database";

class UsersControllers {
    public async getUsers(req: Request, res: Response): Promise<void> {
        const answer = await pool.query('SELECT * FROM Users');
        res.json(answer);
    }

    public async getUser(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        const answer = await pool.query('SELECT * FROM Users WHERE id = ?', [id]);
        if(answer.length > 0) {
            res.json(answer[0]);
            return;
        }
        res.status(404).json({'message':'User not found!'});
    }

    public async createUser(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        const answer = await pool.query('INSERT INTO Users set ?', [req.body, id]);
        res.json(answer);
    }

    public async updateUser(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        const answer = await pool.query('UPDATE Users SET ? WHERE id = ?', [req.body, id]);
        res.json(answer);
    }

    public async deleteUser(req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        const answer = await pool.query(`DELETE FROM Users WHERE id = ${id}`);
        res.json(answer);
    }
}

export const usersControllers = new UsersControllers();