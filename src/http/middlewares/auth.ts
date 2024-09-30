import { FastifyReply, FastifyRequest } from "fastify";

export async function auth(req: FastifyRequest, reply: FastifyReply) {
  try {
    await req.jwtVerify()
  } catch (error) {
    return reply.status(401).send({message: 'Usuário não autorizado'})
  }
}