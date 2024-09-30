import { User } from "@prisma/client";
import { UserRepository } from "../repositories/users-repository";
import {hash} from 'bcrypt'

interface DeleteUserRequest {
  id: string
}

export class DeleteUsersUseCase {
  constructor(
    private useRepository: UserRepository
  ) {}

  async execute({
    id
  }: DeleteUserRequest): Promise<void> {
    try {
      const user = await this.useRepository.findById(id)

      if(!user) {
        throw new Error('Falhar ao localizar usuário!')
      }
      await this.useRepository.delete(user)
      
    } catch (error) {
      console.log(error)
    }

    
  }
}