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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var https = require("https");
var GenerateImgUrl = /** @class */ (function () {
    function GenerateImgUrl(_a) {
        var nmId = _a.nmId, size = _a.size, number = _a.number, format = _a.format;
        this.nmId = nmId;
        this.size = size !== null && size !== void 0 ? size : "big";
        this.number = number !== null && number !== void 0 ? number : 1;
        this.format = format !== null && format !== void 0 ? format : "webp";
    }
    GenerateImgUrl.prototype.getHost = function (id) {
        var urlParts = [
            { range: [0, 143], url: "//basket-01.wb.ru" },
            { range: [144, 287], url: "//basket-02.wb.ru" },
            { range: [288, 431], url: "//basket-03.wb.ru" },
            { range: [432, 719], url: "//basket-04.wb.ru" },
            { range: [720, 1007], url: "//basket-05.wb.ru" },
            { range: [1008, 1061], url: "//basket-06.wb.ru" },
            { range: [1062, 1115], url: "//basket-07.wb.ru" },
            { range: [1116, 1169], url: "//basket-08.wb.ru" },
            { range: [1170, 1313], url: "//basket-09.wb.ru" },
            { range: [1314, 1601], url: "//basket-10.wb.ru" },
            { range: [1602, 1655], url: "//basket-11.wb.ru" },
            { range: [1656, 1919], url: "//basket-12.wb.ru" },
            { range: [1920, 2045], url: "//basket-13.wb.ru" },
            { range: [2046, Infinity], url: "//basket-14.wb.ru" }
        ];
        var url = urlParts.find(function (_a) {
            var range = _a.range;
            return id >= range[0] && id <= range[1];
        });
        return url;
    };
    GenerateImgUrl.prototype.url = function () {
        var _a;
        var vol = ~~(this.nmId / 1e5), part = ~~(this.nmId / 1e3);
        return "https:".concat((_a = this.getHost(vol)) === null || _a === void 0 ? void 0 : _a.url, "/vol").concat(vol, "/part").concat(part, "/").concat(this.nmId, "/images/").concat(this.size, "/").concat(this.number, ".").concat(this.format);
    };
    return GenerateImgUrl;
}());
function fetchAndWriteData(query) {
    return __awaiter(this, void 0, void 0, function () {
        var url, data, products, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://search.wb.ru/exactmatch/ru/common/v5/search?appType=2&curr=rub&dest=-1257786&query=".concat(query, "&resultset=catalog&sort=popular&spp=30&suppressSpellcheck=false");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetchData(url)];
                case 2:
                    data = _a.sent();
                    products = parseData(data);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function fetchData(url) {
    return new Promise(function (resolve, reject) {
        https.get(url, function (res) {
            var data = '';
            res.on('data', function (chunk) {
                data += chunk;
            });
            res.on('end', function () {
                try {
                    var jsonData = JSON.parse(data);
                    resolve(jsonData);
                }
                catch (error) {
                    reject(error);
                }
            });
        }).on('error', function (error) {
            reject(error);
        });
    });
}
function parseData(data) {
    var productsArray = data.data.products;
    if (productsArray.length === 0) {
        return null;
    }
    var item = productsArray.shift();
    var imgUrlGenerator = new GenerateImgUrl({ nmId: item.id });
    var product = {
        name: item.name,
        imageUrl: imgUrlGenerator.url(),
        price: Math.ceil((item.sizes[0].price.product) / 100),
        productUrl: "https://www.wildberries.ru/catalog/".concat(item.id, "/detail.aspx"),
        id: item.id
    };
    console.log(product);
    return product;
}
fetchAndWriteData('шляпа');
