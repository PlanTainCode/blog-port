import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import PostController from './controllers/PostController.js';


const app = express();
mongoose.connect('mongodb+srv://root:1234@cluster0.bws2c.mongodb.net/?retryWrites=true&w=majority');

const Post = new PostController();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/posts', Post.create)

app.get('/posts', Post.index)

app.get('/posts/:id', Post.read)

app.delete('/posts/:id', Post.delete)

app.put('/posts/:id', Post.update)

app.listen(5555, () => {
    console.log('сервер запущен на порту 5555 а ты сосешь член')
})
