import { Router } from 'express';

import { EmployeesController } from './controllers/EmployeesController';

const router = Router();
const employeesController = new EmployeesController();

router.post("/employees", employeesController.create);
router.get("/employees", employeesController.index);
router.get("/employees/:id", employeesController.findById);
//router.patch("/employees/:id", employeesController.toUpdate);
router.delete("/employees/:id", employeesController.delete);
export { router };