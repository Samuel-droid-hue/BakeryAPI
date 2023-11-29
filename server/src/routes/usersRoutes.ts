import { Router } from "express";
import { usersControllers } from "../controllers/usersControllers";

class UsersRoutes {
    public router: Router=Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/users/', usersControllers.show_users);
    }
}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router;