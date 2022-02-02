const getPosts = (req, res) => {
  res.send("getPosts");
};

const getPostById = (req, res) => {
  res.send("getPostById");
};

const createPost = (req, res) => {
  res.send("createPost");
};

const updatePost = (req, res) => {
  res.send("updatePost");
};

const deletePost = (req, res) => {
  res.send("deletePost");
};

module.exports = { getPosts, getPostById, createPost, updatePost, deletePost };
