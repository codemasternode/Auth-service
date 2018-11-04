"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
//import { Routes } from "./routes/crmRoutes";
class App {
    // public routePrv: Routes = new Routes();
    constructor(port) {
        this.app = express_1.default();
        this.port = port;
        this.config();
        //this.routePrv.routes(this.app);     
    }
    run() {
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}`);
        });
    }
    config() {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map