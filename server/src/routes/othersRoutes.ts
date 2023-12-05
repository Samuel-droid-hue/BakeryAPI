import { Router } from "express";
import { othersControllers } from "../controllers/othersControllers";

class OthersRoutes {
    public router: Router=Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/ingredients', othersControllers.getIngredients);
        this.router.get('/categories', othersControllers.getCategories);
    }
}

const othersRoutes = new OthersRoutes();
export default othersRoutes.router;