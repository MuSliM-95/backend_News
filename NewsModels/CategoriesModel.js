const mongoose = require('mongoose')


const categorySchema = mongoose.Schema({
    name: String,
   
}) 





const  Category = mongoose.model("CategorySchema", categorySchema)

module.exports = Category