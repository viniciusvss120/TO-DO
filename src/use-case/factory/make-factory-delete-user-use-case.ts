import { PrismaUserRepository } from "../../repositories/prisma/prisma-users-repository";
import { DeleteUsersUseCase } from "../delete-user-use-case";

export async function makeFactoryDeleteUserUseCase() {
  const prismaUserRepository = new PrismaUserRepository()

  const deleteUserUseCase = new DeleteUsersUseCase(prismaUserRepository)

  return deleteUserUseCase
}