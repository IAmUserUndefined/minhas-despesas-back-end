const { Router } = require("express");

const userRouters = require("./userRouters");
const expenseRouters = require("./expenseRouters");
const testRouter = require("./testRouter");

const router = Router();

router.use(userRouters);
router.use(expenseRouters);
router.use(testRouter);

module.exports = router;