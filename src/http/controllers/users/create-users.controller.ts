import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeFactoryUseCase } from "../../../use-case/factory/make-factory-use-case";


export async function createUserController(req: FastifyRequest, res: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string()
  })

  const { name, email, password } = registerBodySchema.parse(req.body);
  try {
    const registerUseCase = makeFactoryUseCase()

    await registerUseCase.execute({
      name,
      email,
      password
    })
    
  } catch (error) {
    console.log(error)
  }

  return res.status(201).send();
}