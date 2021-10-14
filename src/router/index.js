const { Router } = require("express");

const userRouters = require("./userRouters");
const expenseRouters = require("./expenseRouters");

const router = Router();

router.use(userRouters);
router.use(expenseRouters);

module.exports = router;