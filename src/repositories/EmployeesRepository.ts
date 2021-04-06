import { EntityRepository, Repository } from "typeorm";
import { Employees } from "../models/Employees";

@EntityRepository(Employees)
class EmployeesRepository extends Repository<Employees> { }

export { EmployeesRepository };
