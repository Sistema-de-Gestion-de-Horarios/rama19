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
const objectDefracment_1 = __importDefault(require("../../utils/objectDefracment"));
class Repository {
    constructor(Model) {
        this.MODEL = Model;
    }
    /**
     * OverLoad
     *
     * **/
    list(query, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (query) {
                if (options) {
                    if (options.limit && !options.skip)
                        options.skip = 0;
                    return this.MODEL.find(objectDefracment_1.default(query), null, objectDefracment_1.default(options));
                }
                else
                    return this.MODEL.find(objectDefracment_1.default(query));
            }
            else {
                return this.MODEL.find();
            }
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.MODEL.findOne({ _id: id });
        });
    }
    store(info) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let infoDB = new this.MODEL(info);
                return infoDB.save();
            }
            catch (err) {
                Promise.reject(err);
            }
        });
    }
    update(id, info) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.MODEL.findByIdAndUpdate({ _id: id }, { $set: info });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.MODEL.remove({ _id: id });
        });
    }
}
exports.default = Repository;
//# sourceMappingURL=Repository.js.map