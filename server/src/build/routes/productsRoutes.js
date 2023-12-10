"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productsControllers_1 = require("../controllers/productsControllers");
class BreadsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', productsControllers_1.productsControllers.getItems);
        this.router.get('/:id', productsControllers_1.productsControllers.getItem);
        this.router.post('/', productsControllers_1.productsControllers.createItem);
        this.router.put('/:id', productsControllers_1.productsControllers.updateItem);
        this.router.delete('/:id', productsControllers_1.productsControllers.deleteItem);
    }
}
const breadsRoutes = new BreadsRoutes();
exports.default = breadsRoutes.router;
