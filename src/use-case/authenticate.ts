import { compare } from "bcrypt";
import { UserRepository } from "../repositories/users-repository";
import jwt from '@fastify/jwt'
import { User } from "@prisma/client";
import { randomUUID } from "crypto";

interface AuthenticateRequest {
  email: string
  password: string
}

interface AuthenticateResponse {
  token: string
}

export class AuthenticateUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({
    email,
    password
  }: AuthenticateRequest): Promise<AuthenticateResponse> {
    console.log(email)
    const user = await this.userRepository.findByEmail(email)

    if(!user) {
      throw new Error('User not found!')
    }

    const validatePassword = await compare(password, user.password)

    if(!validatePassword) {
      throw new Error('Password invalid !')
    }

    return {
      token: 'jdfbkjsbfjkvbskbfbfkbkdbvfçvzça'
    }
  }
}