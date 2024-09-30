import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { makeFactoryEditUserUseCase } from "../../../use-case/factory/make-factory-edit-user-use-case";


export async function editUserController(req: FastifyRequest, res: FastifyReply) {
  const userSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    password: z.string()
  })

  const {id, name, email, password} = userSchema.parse(req.body)
  // const {id} = userSchema.parse(req.params)

  try {
    const editUser = await makeFactoryEditUserUseCase() 
    console.log(id)
    const userEdited = await editUser.execute({
        id,
        name,
        email,
        password
      })

    if (userEdited) {

      res.status(204).send(userEdited)
    }

    
  } catch (error) {
    console.log('Deu ruim!' ,error)
  }
}