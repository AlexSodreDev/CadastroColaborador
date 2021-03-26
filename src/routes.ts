import { Router } from 'express';
import { CollaboratorController } from './controllers/CollaboratorControler';

const router = Router();

const collaboratorController = new CollaboratorController();

router.get("/collaborator", collaboratorController.create);

export { router };