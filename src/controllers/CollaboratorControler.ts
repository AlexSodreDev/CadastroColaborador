import { Request, Response } from "express";


class CollaboratorController {
    create(request: Request, response: Response) {
        return response.status(200).json("Hello World!!")
    }
}

export { CollaboratorController };