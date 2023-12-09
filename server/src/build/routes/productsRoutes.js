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
    }
}
const breadsRoutes = new BreadsRoutes();
exports.default = breadsRoutes.router;
