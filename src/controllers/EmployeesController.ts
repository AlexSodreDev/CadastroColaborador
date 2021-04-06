import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { EmployeesRepository } from "../repositories/EmployeesRepository";

class EmployeesController {
    async create(request: Request, response: Response) {
        const { name, cpf, phone, email, birth_date, hire_date } = request.body;

        const employeesRepository = getCustomRepository(EmployeesRepository);

        const employeeAlreadyExists = await employeesRepository.findOne({
            cpf
        });

        if (employeeAlreadyExists) {
            return response.status(409).json({
                error: "Employee already exists!",
            });
        }

        const employee = employeesRepository.create({
            name,
            cpf,
            phone,
            email,
            birth_date,
            hire_date
        })

        await employeesRepository.save(employee);

        return response.status(201).json(employee);
    }
}

export { EmployeesController };