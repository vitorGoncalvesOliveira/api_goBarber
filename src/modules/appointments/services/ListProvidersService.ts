import { injectable, inject } from 'tsyringe';
import User from '@modules/users/infra/typeorm/entities/User';
import IUserRepository from '@modules/users/repositories/IUserRepository';

interface IRequestDto {
  user_id: string;
}
@injectable()
class ListProviderService {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUserRepository,
  ) { }

  public async execute({ user_id }: IRequestDto): Promise<User[]> {
    const user = await this.userRepository.findAllProviers({
      except_user_id: user_id,
    });

    return user;
  }
}

export default ListProviderService;
