import fastify from "fastify";
import { env } from "./env";
import { usersRoutes } from "./http/controllers/users/routes";
import jwt from '@fastify/jwt'
import { tarefasRoutes } from "./http/controllers/tarefas/routes";

export const app = fastify()

app.register(jwt, {
  secret: env.SECRET_KEY,
})
app.register(usersRoutes)
app.register(tarefasRoutes)

const port = env.PORT
app.listen({
  port: env.PORT,
}).then(() => console.log(`HTTP server running!${port}`))