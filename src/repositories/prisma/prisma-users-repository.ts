import { Prisma, PrismaClient, User } from "@prisma/client";
import { UserRepository } from "../users-repository";

const prisma = new PrismaClient()
export class PrismaUserRepository implements UserRepository {
  async findAll(): Promise<User[]> {
    const result = await prisma.user.findMany()

    if(!result) {
      throw new Error('User not found!')
    }

    return result
  }

  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    })
    if (!user) {
      return null
    }

    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })
    if (!user) {
      return null
    }

    return user
  }

  async create(user: Prisma.UserCreateInput): Promise<User> {
    const result = await prisma.user.create({
      data: user
    })

    if (!result) {
      throw new Error('Falha ao criar usuário !')
    }

    return result
  }

  async save(id: string, user: Prisma.UserCreateInput): Promise<User> {
    const data = user
    const result = await prisma.user.update({
      where: {
        id
      },
      data
    })

    if (!result) {
      throw new Error('Falha ao atualizar usuário !')
    }

    return result
  }

  async delete(user: User): Promise<void> {
    const result = await prisma.user.delete({
      where: {
        id: user.id
      },
    })

    if (!result) {
      throw new Error('Falha ao atualizar usuário !')
    }
  }

}