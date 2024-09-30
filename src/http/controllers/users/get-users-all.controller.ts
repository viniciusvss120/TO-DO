import { FastifyReply, FastifyRequest } from "fastify";
import { makeFactoryGetUserUseCase } from "../../../use-case/factory/make-factory-get-user-use-case";

export async function getUsersAll(req: FastifyRequest, res: FastifyReply) {
  try {
    const getUsers = makeFactoryGetUserUseCase()

    const result = await getUsers.execute()

    return res.send(result)
  } catch (error) {
    console.log(error)
  }
}