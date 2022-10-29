const Category = require("../NewsModels/CategoriesModel");

module.exports.categoriesController = {
  getCategories: async (req, res) => {
    try {
      const data = await Category.find();
      res.json(data);
    } catch (error) {
      res.json(error.message);
    }
  },

  addCategories: async (req, res) => {
    try {
      const {name } = req.body;
      const comment = await Category.create({
        name,
      });
      res.json(comment);
    } catch (error) {
      res.json(error.message);
    }
  },

  patchCategories: async (req, res) => {
    const { name } = req.body;
    try {
      const comment = await Category.findByIdAndUpdate(
        req.params.id,
        {
          name,
        },
        { new: true }
      );
      res.json(comment)
    } catch (error) {
      res.json(error.message);
    }
  },

  deleteCategories: async (req, res) => {
    const data = await Category.findByIdAndRemove(req.params.id);
    res.json('Удалено')
    try {
    } catch (error) {
      res.json(error.message);
    }
  },
};
