import { FastifyInstance } from "fastify";
import { createUserController } from "./create-users.controller";
import { getUsersAll } from "./get-users-all.controller";
import { authenticateController } from "./authenticate.controller";
import { editUserController } from "./edit-user.controller";
import { deleteUserController } from "./delete-user.controller";
import { auth } from "@/http/middlewares/auth";

export async function usersRoutes(app: FastifyInstance) {
  app.post('/login', authenticateController),
  app.post('/users', createUserController),
  app.get('/users',{onRequest: [auth]}, getUsersAll),
  app.put('/users', {onRequest: [auth]}, editUserController)
  app.delete('/users/:id', deleteUserController)
}