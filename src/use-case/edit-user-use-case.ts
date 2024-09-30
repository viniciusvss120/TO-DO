import { User } from "@prisma/client";
import { UserRepository } from "../repositories/users-repository";
import {hash} from 'bcrypt'

interface EditUserRequest {
  id: string
  name: string
  email: string
  password: string
}

interface EditUserResponse {
  user: User
}
export class EditUsersUseCase {
  constructor(
    private useRepository: UserRepository
  ) {}

  async execute({
    id,
    name,
    email,
    password
  }: EditUserRequest): Promise<EditUserResponse> {
    const newPassword = await hash(password, 8)
    // const findUser = await this.useRepository.findById(id)
    
    // if (!findUser) {
    //   throw new Error('User not found !')
    // }

    const user = await this.useRepository.save(id, {
      name,
      email,
      password: newPassword
    })

    // console.log(user)
    if(!user) {
      throw new Error('Falhar ao editar usuário!')
    }

    return {user}
    
  }
}