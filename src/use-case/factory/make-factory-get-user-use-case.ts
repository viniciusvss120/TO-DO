import { PrismaUserRepository } from "../../repositories/prisma/prisma-users-repository";
import { GetUsersUseCase } from "../get-users-use-case";

export function makeFactoryGetUserUseCase() {
  const prismaUserRepository = new PrismaUserRepository()

  const getUserUseCase = new GetUsersUseCase(prismaUserRepository)

  return getUserUseCase
}