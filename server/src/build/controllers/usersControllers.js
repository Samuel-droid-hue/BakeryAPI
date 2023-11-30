"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersControllers = void 0;
const database_1 = __importDefault(require("../database"));
class UsersControllers {
    show_users(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const answer = yield database_1.default.query('SELECT * FROM users');
            res.json(answer);
        });
    }
    show_user(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const answer = yield database_1.default.query('SELECT * FROM users WHERE id = ?', [id]);
            if (answer.length > 0) {
                res.json(answer[0]);
                return;
            }
            res.status(404).json({ 'message': 'User not found!' });
        });
    }
    new_user(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const answer = yield database_1.default.query('INSERT INTO users set ?', [req.body, id]);
            res.json(answer);
        });
    }
    update_user(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const answer = yield database_1.default.query('UPDATE users SET ? WHERE id = ?', [req.body, id]);
            res.json(answer);
        });
    }
    delete_user(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const answer = yield database_1.default.query(`DELETE FROM users WHERE id = ${id}`);
            res.json(answer);
        });
    }
}
exports.usersControllers = new UsersControllers();
