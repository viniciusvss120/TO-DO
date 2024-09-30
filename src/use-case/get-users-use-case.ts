import { User } from "@prisma/client";
import { UserRepository } from "../repositories/users-repository";
import {hash} from 'bcrypt'

interface RegisterUserResponse {
  user: User[]
}

export class GetUsersUseCase {
  constructor(
    private useRepository: UserRepository
  ) {}

  async execute(): Promise<RegisterUserResponse> {
  
    const user = await this.useRepository.findAll()

    return {
      user
    }
    
  }
}