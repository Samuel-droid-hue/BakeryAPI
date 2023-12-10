import { Router } from "express";
import { productsControllers } from "../controllers/productsControllers";

class BreadsRoutes {
    public router: Router=Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', productsControllers.getItems);
        this.router.get('/:id', productsControllers.getItem);
        this.router.post('/', productsControllers.createItem);
        this.router.put('/:id', productsControllers.updateItem);
    }
}

const breadsRoutes = new BreadsRoutes();
export default breadsRoutes.router;