import { PrismaUserRepository } from "../../repositories/prisma/prisma-users-repository";
import { EditUsersUseCase } from "../edit-user-use-case";

export async function makeFactoryEditUserUseCase() {
  const prismaUserRepository = new PrismaUserRepository()

  const editUserUseCase = new EditUsersUseCase(prismaUserRepository)

  return editUserUseCase
}