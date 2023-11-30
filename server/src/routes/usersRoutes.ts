import { Router } from "express";
import { usersControllers } from "../controllers/usersControllers";

class UsersRoutes {
    public router: Router=Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', usersControllers.show_users);
        this.router.get('/:id', usersControllers.show_user);
        this.router.post('/', usersControllers.new_user);
        this.router.put('/:id', usersControllers.update_user);
        this.router.delete('/:id', usersControllers.delete_user);
    }
}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router;