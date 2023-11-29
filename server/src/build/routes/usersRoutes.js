"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersControllers_1 = require("../controllers/usersControllers");
class UsersRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/users/', usersControllers_1.usersControllers.show_users);
    }
}
const usersRoutes = new UsersRoutes();
exports.default = usersRoutes.router;
