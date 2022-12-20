const Router = require('express')
const {userController} = require('../NewsControllers/usersController')
const upload = require('../middleWares/upload')

const router =  Router()

router.get("/users", userController.getController)
router.get("/users/:id", userController.getUserIdController)
router.post("/users", userController.userRegistrationController)
router.patch("/users/:id", upload.single("image"), userController.patchController)
router.delete("/users/:id", userController.deleteController)
router.post("/login", userController.login )

module.exports = router     