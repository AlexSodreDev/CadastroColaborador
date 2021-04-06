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

    async findById(request: Request, response: Response) {
        const employeesRepository = getCustomRepository(EmployeesRepository);

        const employeeId = parseInt(request.params.id)

        const employeeFindId = await employeesRepository.findOne({ id: employeeId })

        if (!employeeFindId) {
            return response.sendStatus(404).json({
                error: "Id not found!"
            });
        }

        return response.status(200).json(employeeFindId)
    }
}

export { EmployeesController };