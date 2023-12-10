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
exports.basketsControllers = void 0;
const database_1 = __importDefault(require("../database"));
class BasketsControllers {
    getBasket(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const answer = yield database_1.default.query(`SELECT 
            BakeryItems.name, BakeryItems.price, Baskets.quantity
            FROM Baskets
            JOIN BakeryItems ON Baskets.product_id = BakeryItems.id
            WHERE Baskets.client_id = ?;`, [id]);
            if (answer.length > 0) {
                res.json(answer);
                return;
            }
            res.status(404).json({ 'message': 'El carrito se encuentra vacio!' });
        });
    }
    addItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_client, id_product, quantity } = req.query;
            const answer = yield database_1.default.query(`INSERT INTO Baskets (client_id, product_id, quantity)
        VALUES(?, ?, ?) ON DUPLICATE KEY UPDATE quantity = quantity + ?`, [id_client, id_product, quantity, quantity]);
            res.json(answer);
        });
    }
    deleteItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_client, id_product } = req.query;
            const answer = yield database_1.default.query('DELETE FROM Baskets WHERE client_id = ? AND product_id = ?', [id_client, id_product]);
            res.json(answer);
        });
    }
}
exports.basketsControllers = new BasketsControllers();
