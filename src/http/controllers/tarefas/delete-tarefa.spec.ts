import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";
import {app} from '../../../app'
import { prisma } from "../../../../lib/prisma";
import request from 'supertest'
import { randomUUID } from "crypto";


describe('[POST] Delete tarefa', () => {
  beforeEach(async () => {
    await app.ready()
    
  })

  afterAll(async () => {
    // await dropAllTables()
    await app.close();
  });
  it('shoud be abble to edit and tarefa', async () => {
    const tarefa = await prisma.tarefa.create({
      data: {
        title: 'Estudar React Native',
        description: 'Assistir aula e colocar em prática',
        userId: "1325f100-e221-4c6d-b4dd-2f8399843baa",
        createdAt: new Date(),
        updatedAt: new Date()
      } 
    })
    const response = await request(app.server)
      .delete(`/tarefas/${tarefa.id}`)
      .send()

      expect(response.statusCode).toEqual(204)
      
  })
})