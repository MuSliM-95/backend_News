const Router = require('express')

const router = Router()


router.use(require('./newsRoute'))
router.use(require('./usersRoute'))
router.use(require('./commentsRoute'))
router.use(require('./categoriesRoute'))


module.exports = router;