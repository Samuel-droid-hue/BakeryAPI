"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const basketsControllers_1 = require("../controllers/basketsControllers");
class BasketsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id', basketsControllers_1.basketsControllers.getBasket);
    }
}
const basketsRoutes = new BasketsRoutes();
exports.default = basketsRoutes.router;
