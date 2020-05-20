import { Request, Response } from 'express';
import UserService from '@modules/users/services/CreateUserService';
import { container } from 'tsyringe';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const userService = container.resolve(UserService);

    const user = await userService.exec({
      name,
      email,
      password,
    });

    delete user.password;

    return response.json(user);
  }
}
