import { Prisma, PrismaClient } from "@prisma/client";
import { Tarefa, TarefaRepository } from "../tarefa-repository";

const prisma = new PrismaClient()
export class PrismaTarefaRepository implements TarefaRepository {
  async findAll(): Promise<Tarefa[]> {
    const result = await prisma.tarefa.findMany()

    if(!result) {
      throw new Error('Tarefa not found!')
    }

    return result
  }

  async findById(id: string): Promise<Tarefa | null> {
    const tarefa = await prisma.tarefa.findUnique({
      where: {
        id
      }
    })
    if (!tarefa) {
      return null
    }

    return tarefa
  }

  async findByTarefaId(tarefaId: string): Promise<Tarefa | null> {
    const tarefa = await prisma.tarefa.findUnique({
      where: {
        id: tarefaId
      }
    })
    if (!tarefa) {
      return null
    }

    return tarefa
  }

  async create(tarefa: Prisma.TarefaUncheckedCreateInput): Promise<Tarefa> {
    const result = await prisma.tarefa.create({
      data: tarefa
    })

    if (!result) {
      throw new Error('Falha ao criar usuário !')
    }

    return result
  }

  async save(id: string, tarefa: Prisma.TarefaUncheckedUpdateInput): Promise<Tarefa> {
    const data = tarefa
    const result = await prisma.tarefa.update({
      where: {
        id
      },
      data
    })

    if (!result) {
      throw new Error('Falha ao atualizar usuário !')
    }

    return result
  }

  async delete(id: string): Promise<void> {
    const tarefa = await this.findById(id)

    if (!tarefa) {
      throw new Error('Tarefa not found !')
    }
    const result = await prisma.tarefa.delete({
      where: {
        id: tarefa.id
      },
    })

    if (!result) {
      throw new Error('Falha ao atualizar usuário !')
    }
  }

}