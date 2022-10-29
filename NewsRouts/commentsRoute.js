const Router = require('express')
const {commentController} = require('../NewsControllers/commentsController')
const authorizationMidolvar = require('../middleWares/auth.middlewares')
const router = Router()


router.post('/comments', authorizationMidolvar, commentController.addComments)
router.get('/comments', commentController.getComments)
router.patch('/comments/:id', authorizationMidolvar, commentController.patchComments)
router.delete('/comments/:id', authorizationMidolvar, commentController.deleteComments)

module.exports = router  