import { FastifyInstance } from "fastify";
import { createTarefasController } from "./create-tarefa";
import { listTarefasController } from "./list-tarefas";
import { deleteTarefaController } from "./delete-tarefa";
import { editTarefaController } from "./edit-tarefa";
import { auth } from "@/http/middlewares/auth";

export async function tarefasRoutes(app: FastifyInstance) {
  app.post('/tarefas', {onRequest: [auth]}, createTarefasController),
  app.get('/tarefas', {onRequest: [auth]}, listTarefasController),
  app.put('/tarefas', {onRequest: [auth]}, editTarefaController)
  app.delete('/tarefas/:id', {onRequest: [auth]}, deleteTarefaController)
}