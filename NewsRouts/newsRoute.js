const Router = require('express')
const {newsController} = require('../NewsControllers/newsController')
const upload = require('../middleWares/upload')
const authorizationMidolvar = require('../middleWares/auth.middlewares')
const router = Router()

router.post('/news', upload.single("image"),  newsController.postContoller )
router.get('/news', newsController.getController)
router.get('/news/categories/:id', newsController.getCattegoriController)
router.get('/news/:id', newsController.getControllerByid)
router.patch('/news/:id', upload.single('image'), authorizationMidolvar, newsController.patchController)
router.delete('/news/:id',  newsController.deleteController)


module.exports = router  