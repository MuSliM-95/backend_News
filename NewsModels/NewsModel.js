
const mongoose = require('mongoose')



const newsSchema = mongoose.Schema({
image: {
  type:  String,
  default: "Default.png"
},
imageSrc: {
    type: String,
    default: ''
},
name: String,
text: String,
categories_id:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category"
},
// commentsId: [
// {
//   type: mongoose.SchemaTypes.ObjectId,
//   ref: "Comment"
// }
// ]



})

const News = mongoose.model("NewsSchema", newsSchema)

module.exports = News