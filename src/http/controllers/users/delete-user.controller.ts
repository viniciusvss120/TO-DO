import { makeFactoryDeleteUserUseCase } from "@/use-case/factory/make-factory-delete-user-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function deleteUserController(req: FastifyRequest, res: FastifyReply) {
  const userSchema = z.object({
    id: z.string()
  })

  const {id} = userSchema.parse(req.params)

  try {
    const deleteUseCase = await makeFactoryDeleteUserUseCase()

    await deleteUseCase.execute({ id })

    res.status(204).send('Usuário deletado com sucesso!')
  } catch (error) {
    res.status(401).send(error)
  }
}