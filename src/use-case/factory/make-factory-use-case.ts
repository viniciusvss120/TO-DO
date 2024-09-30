import { PrismaUserRepository } from "../../repositories/prisma/prisma-users-repository";
import { CreateUsersUseCase } from "../create-users";

export function makeFactoryUseCase() {
  const prismaUserRepository = new PrismaUserRepository()

  const createUserUseCase = new CreateUsersUseCase(prismaUserRepository)

  return createUserUseCase
}