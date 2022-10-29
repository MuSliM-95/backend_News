const Router = require('express')
const {categoriesController}  = require('../NewsControllers/categoriesController')
const authorizationMidolvar = require('../middleWares/auth.middlewares')
const router = Router()

router.post('/categories', categoriesController.addCategories)
router.get('/categories',  categoriesController.getCategories)
router.patch('/categories/:id', authorizationMidolvar, categoriesController.patchCategories)
router.delete('/categories/:id', authorizationMidolvar, categoriesController.deleteCategories)

module.exports = router 