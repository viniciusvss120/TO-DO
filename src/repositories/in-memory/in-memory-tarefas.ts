import { Prisma } from "@prisma/client";
import { TarefaRepository, Tarefa } from "../tarefa-repository";
import { randomUUID } from "crypto";

export class InMemoryTarefas implements TarefaRepository {

  public items: Tarefa[] = []

  async findAll(): Promise<Tarefa[]> {
    const result = this.items

    return result
  }
  async findById(id: string): Promise<Tarefa | null> {
    const tarefa = this.items.find(tarefa => tarefa.id === id)

    if (!tarefa) {
      return null
    }

    return tarefa
  }

  async findByTarefaId(tarefaId: string): Promise<Tarefa | null> {
    const tarefa = this.items.find(tarefa => tarefa.id === tarefaId)

    if (!tarefa) {
      return null
    }

    return tarefa
  }
  
  async create(data: Prisma.TarefaUncheckedCreateInput): Promise<Tarefa> {
    const tarefa = {
      id: data.id ,
      title: data.title,
      description: data.description,
      userId: data.userId
    }
    this.items.push(tarefa)

    return tarefa
  }

  async save(id: string, data: Prisma.TarefaUpdateInput): Promise<Tarefa> {
    const indexTarefa = await this.items.findIndex(item => item.id === id)

    console.log(this.items, indexTarefa)
    if (indexTarefa < 0) {
      throw new Error('Not found')
    }
    
    Object.assign(this.items[indexTarefa], data )
    return this.items[indexTarefa]
  }

  async delete(id: string) {
    const indexTarefa = await this.items.findIndex((index) => index.id === id)
    
    
    if (indexTarefa < 0) {
      throw new Error('Not found')
    }
    
    this.items.splice(indexTarefa, 1)
    console.log(this.items)
  }
}