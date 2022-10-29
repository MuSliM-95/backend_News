const News = require("../NewsModels/NewsModel");


module.exports.newsController = {
  postContoller: async (req, res) => {
    const { name, text, categories_id, } = req.body;
      const { filename } = req.file
    try {
      const data = await  News.create({
        image: filename,
        imageSrc: req.file ? req.file.path : '' ,
        name,
        text,
        categories_id,

      });
      return res.json(data);
    
    } catch (error) {
      res.json(error.message);
    }
  },

  getController: async (req, res) => {
    try {
      const data = await News.find()
      res.json(data);
    } catch (error) {
      res.json(error.message, "OH WHAT OH WENT WRONG");
    }
  },
  getControllerByid: async (req, res) => {
    try {
      const data = await News.findById(req.params.id)
      res.json(data);
    } catch (error) {
      res.json(error.message, "OH WHAT OH WENT WRONG");
    }
  },
  getCattegoriController: async (req, res) => {
    try {
      const data = await News.find({ categories_id: req.params.id });
       res.json(data);
    } catch (error) {
      rs.json("OH WHAT OH WENT WRONG");
    }
  }, 

  patchController: async (req, res) => {
    try {
      const { name, text } = req.body;
      const data = await News.findByIdAndUpdate({
        name,
        text, 
      }, {new:true});
     res.json("ERROR WHEN CHANGING NEWS");
    } catch (error) {
      res.json("ERROR WHEN CHANGING NEWS");
    } 
  },

  deleteController: async (req, res) => {
    try {
      const data = await News.findByIdAndRemove(req.params.id);
     res.json('Удалено')
    } catch (error) {
      res.json(error.message);
    }
  },
};

  