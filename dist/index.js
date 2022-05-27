"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _PostController = require("./controllers/PostController.js");

var _PostController2 = _interopRequireDefault(_PostController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
_mongoose2.default.connect('mongodb+srv://root:1234@cluster0.bws2c.mongodb.net/?retryWrites=true&w=majority');

var Post = new _PostController2.default();

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

app.post('/posts', Post.create);

app.get('/posts', Post.index);

app.get('/posts/:id', Post.read);

app.delete('/posts/:id', Post.delete);

app.put('/posts/:id', Post.update);

app.listen(5555, function () {
    console.log('сервер запущен на порту 5555 а ты сосешь член');
});