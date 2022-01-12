const { Router } = require("express");

const authenticateUser = require("../middlewares/authenticateUser");

const adaptMiddlewares = require("../adapters/adapterMiddlewares/adapterMiddlewares");
const adaptRouters = require("../adapters/adapterRouters/adapterRouters");

const CreateUserController = require("../useCases/Expense/CreateExpense/CreateExpenseController");
const UpdateExpenseController = require("../useCases/Expense/UpdateExpense/UpdateExpenseController");
const GetExpenseController = require("../useCases/Expense/GetExpense/GetExpenseController");
const DeleteExpenseController = require("../useCases/Expense/DeleteExpense/DeleteExpenseController");

const router = Router();

router.post("/expenses", adaptMiddlewares(authenticateUser), adaptRouters(CreateUserController.handle));
router.put("/expenses/update/:id", adaptMiddlewares(authenticateUser), adaptRouters(UpdateExpenseController.handle));
router.get("/expenses", adaptMiddlewares(authenticateUser), adaptRouters(GetExpenseController.handle));
router.delete("/expenses/delete/:id", adaptMiddlewares(authenticateUser), adaptRouters(DeleteExpenseController.handle));

module.exports = router;