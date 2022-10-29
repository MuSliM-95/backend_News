const mongoose =  require('mongoose')



const commentSchema = mongoose.Schema({
    text: String,
   user_id: {
    type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
   },

   newsId: {
type: mongoose.SchemaTypes.ObjectId,
ref: "News"
   }
})

const Comment = mongoose.model("CommentSchema", commentSchema)

module.exports = Comment