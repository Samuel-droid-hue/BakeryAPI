import { Request, Response } from "express";
import pool from "../database";

class UsersControllers {
    public async show_users(req: Request, res: Response): Promise<void> {
        const answer = await pool.query('SELECT * FROM users');
        res.json(answer);
    }
}

export const usersControllers = new UsersControllers();