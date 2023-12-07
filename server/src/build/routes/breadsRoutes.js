"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const breadsControllers_1 = require("../controllers/breadsControllers");
class BreadsRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', breadsControllers_1.breadsControllers.getItems);
        this.router.get('/:id', breadsControllers_1.breadsControllers.getBread);
    }
}
const breadsRoutes = new BreadsRoutes();
exports.default = breadsRoutes.router;
