import { PrismaUserRepository } from "../../repositories/prisma/prisma-users-repository";
import { AuthenticateUseCase } from "../authenticate";

export function makeFactoryAuthenticateUseCase() {
  const prismaUserRepository = new PrismaUserRepository()

  const getUserUseCase = new AuthenticateUseCase(prismaUserRepository)

  return getUserUseCase
}