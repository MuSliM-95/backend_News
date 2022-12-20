const Comment = require("../NewsModels/CommentsModel");
const News = require("../NewsModels/NewsModel");

module.exports.commentController = {
  getComments: async (req, res) => {
    try {
      const data = await Comment.find();
      res.json(data);
    } catch (error) {
      res.json(error.message);
    }
  },

  addComments: async (req, res) => {
    try {
      const { newsId, text, user_id } = req.body;
      const comment = await Comment.create({
        newsId,
        text,
        user_id,
        time: new Date(),
        date: new Date().toLocaleDateString(),
        hour: new Date().toLocaleTimeString()
      });
      res.json(comment);
    } catch (error) {
      res.json(error.message);
    }
  },

  patchComments: async (req, res) => {
    const { text } = req.body;
    try {
      const comment = await Comment.findByIdAndUpdate(req.params.id, {
        text,
      }, {new: true});
      res.json(comment)
    } catch (error) {
        res.json(error.message)
    }
  },

  deleteComments: async (req, res) => {
    const data = await Comment.findByIdAndRemove(req.params.id)
    res.json("Удаленно")
    try {
    } catch (error) {
        res.json(error.message)
    }
  },
};
