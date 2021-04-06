import { Router } from 'express';
import { EmployeesController } from './controllers/EmployeesController';

const router = Router();

const employeesController = new EmployeesController();

router.post("/employees", employeesController.create);

export { router };