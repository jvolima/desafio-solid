import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    try {
      const { name, email } = request.body;
      const user = this.createUserUseCase.execute({ name, email });
      return response.status(201).json(user);
    } catch (error) {
      const result = (error as Error).message;
      return response.status(400).json({ error: result });
    }
  }
}

export { CreateUserController };
