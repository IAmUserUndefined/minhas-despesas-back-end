const { Router } = require("express");

const authenticateUser = require("../middlewares/authenticateUser");

const adaptMiddlewares = require("../adapters/adapterMiddlewares");
const adaptRouters = require("../adapters/adapterRouters/adapterRouters");

const CreateUserController = require("../useCases/Expense/CreateExpense/CreateExpenseController");
const UpdateExpenseController = require("../useCases/Expense/UpdateExpense/UpdateExpenseController");
const GetExpenseController = require("../useCases/Expense/GetExpense/GetExpenseController");
const ExpenseSearchController = require("../useCases/Expense/ExpenseSearch/ExpenseSearchController");
const DeleteExpenseController = require("../useCases/Expense/DeleteExpense/DeleteExpenseController");

const router = Router();

router.post("/expenses", adaptMiddlewares(authenticateUser), adaptRouters(CreateUserController.handle));
router.put("/expenses/update/:id", adaptMiddlewares(authenticateUser), adaptRouters(UpdateExpenseController.handle));
router.get("/expenses", adaptMiddlewares(authenticateUser), adaptRouters(GetExpenseController.handle));
router.post("/expenses/expenses-search", adaptMiddlewares(authenticateUser), adaptRouters(ExpenseSearchController.handle));
router.delete("/expenses/delete/:id", adaptMiddlewares(authenticateUser), adaptRouters(DeleteExpenseController.handle));

module.exports = router;