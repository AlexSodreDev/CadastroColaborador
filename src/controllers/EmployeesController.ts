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

    async index(request: Request, response: Response) {
        const employeesRepository = getCustomRepository(EmployeesRepository);

        const employeeListAll = await employeesRepository.find();

        response.json(employeeListAll)
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

    /**async toUpdate(request: Request, response: Response) {
        const employeesRepository = getCustomRepository(EmployeesRepository);

        const employeeId = parseInt(request.params.id)

        const employeeFindId = await employeesRepository.findOne({ id: employeeId })

        const toUpdate = 

        if (!employeeFindId) {
            return response.sendStatus(404).json({
                error: "Id not found!"
            });
        }

        return response.status(200).json(employeeFindId)
   } */

    async delete(request: Request, response: Response) {
        const employeesRepository = getCustomRepository(EmployeesRepository);

        const employeeId = request.params.id

        const deleteEmployee = await employeesRepository.delete(employeeId)

        return response.status(204).json(deleteEmployee)
    }
}

export { EmployeesController };