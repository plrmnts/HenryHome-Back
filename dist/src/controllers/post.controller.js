"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatePost = exports.createPost = exports.getPostById = exports.getPosts = void 0;
const getPosts = (req, res) => {
    res.send("getPosts");
};
exports.getPosts = getPosts;
const getPostById = (req, res) => {
    res.send("getPostById");
};
exports.getPostById = getPostById;
const createPost = (req, res) => {
    res.send("createPost");
};
exports.createPost = createPost;
const updatePost = (req, res) => {
    res.send("updatePost");
};
exports.updatePost = updatePost;
const deletePost = (req, res) => {
    res.send("deletePost");
};
exports.deletePost = deletePost;
