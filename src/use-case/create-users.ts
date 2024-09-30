import { User, UserRepository } from "../repositories/users-repository";
import {hash} from 'bcrypt'

interface RegisterUserRequest {
  name: string
  email: string
  password: string
}

interface RegisterUserResponse {
  user: User
}

export class CreateUsersUseCase {
  constructor(
    private useRepository: UserRepository
  ) {}

  async execute({
    name,
    email,
    password
  }: RegisterUserRequest): Promise<RegisterUserResponse> {
    const newPassword = await hash(password, 8)
    const result = await this.useRepository.create({
      name,
      email,
      password: newPassword
    })

    return {
      user: result
    }
    
  }
}