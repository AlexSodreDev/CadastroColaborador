import { Router } from 'express';

import { EmployeesController } from './controllers/EmployeesController';

const router = Router();

const employeesController = new EmployeesController();

router.post("/employees", employeesController.create);

router.get("/employees/:id", employeesController.findById);

export { router };