import { Prisma } from "@prisma/client"

export interface Tarefa {
  id?: string
  title: string
  description: string
  isCompleted?: boolean
  createdAt?: Date
  updatedAt?: Date | null
  userId: string
}

export interface TarefaRepository {
  findAll(): Promise<Tarefa[]>
  findById(id: string): Promise<Tarefa | null>
  findByTarefaId(email: string): Promise<Tarefa | null>
  create(tarefa: Prisma.TarefaUncheckedCreateInput | Tarefa): Promise<Tarefa>
  save(id: string, tarefa: Prisma.TarefaUncheckedUpdateInput): Promise<Tarefa>
  delete(id: string): Promise<void>
}