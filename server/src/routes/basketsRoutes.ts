import { Router } from "express";
import { basketsControllers } from "../controllers/basketsControllers";

class BasketsRoutes {
    public router: Router=Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/:id', basketsControllers.getBasket)
    }
}

const basketsRoutes = new BasketsRoutes();
export default basketsRoutes.router;