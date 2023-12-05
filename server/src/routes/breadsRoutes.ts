import { Router } from "express";
import { breadsControllers } from "../controllers/breadsControllers";

class BreadsRoutes {
    public router: Router=Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', breadsControllers.getBreads);
        this.router.get('/:id', breadsControllers.getBread);
    }
}

const breadsRoutes = new BreadsRoutes();
export default breadsRoutes.router;