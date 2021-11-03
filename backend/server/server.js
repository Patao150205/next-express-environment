'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = __importDefault(require('express'));
var app = (0, express_1.default)();
var PORT = process.env.PORT || 8000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', function (req, res) {
  res.send('ぱたお');
});
app.use('/api', require('./api/hello'));
app.listen(PORT, function () {
  console.log('express start on ' + PORT);
});
