import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeFactoryAuthenticateUseCase } from "../../../use-case/factory/make-factory-authenticate-use-case";


export async function authenticateController(req: FastifyRequest, res: FastifyReply) {
  const registerBodySchema = z.object({
    email: z.string().email(),
    password: z.string()
  })

  const { email, password } = registerBodySchema.parse(req.body);
  try {
    const authenticateUseCase = makeFactoryAuthenticateUseCase()

    const user = await authenticateUseCase.execute({
      email,
      password
    })

    const token = await res.jwtSign({id: user.token},)

    console.log(token)
    return res.status(200).send({
        token
      })
    
  } catch (error) {
    res.status(401).send(error)
    console.log(error)
  }
}