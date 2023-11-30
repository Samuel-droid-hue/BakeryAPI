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
        this.router.get('/', usersControllers_1.usersControllers.show_users);
        this.router.get('/:id', usersControllers_1.usersControllers.show_user);
        this.router.post('/', usersControllers_1.usersControllers.new_user);
        this.router.put('/:id', usersControllers_1.usersControllers.update_user);
        this.router.delete('/:id', usersControllers_1.usersControllers.delete_user);
    }
}
const usersRoutes = new UsersRoutes();
exports.default = usersRoutes.router;
