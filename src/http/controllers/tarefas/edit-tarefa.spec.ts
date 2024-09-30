import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";
import {app} from '../../../app'
import { prisma } from "../../../../lib/prisma";
import request from 'supertest'
import { randomUUID } from "crypto";


describe('[POST] Edit tarefa', () => {
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
        title: 'Estudar HTML e CSS',
        description: 'Assistir aula e colocar em prática',
        userId: "1325f100-e221-4c6d-b4dd-2f8399843baa",
        createdAt: new Date(),
        updatedAt: new Date()
      } 
    })
    const response = await request(app.server)
      .put(`/tarefas`)
      .send({
        id: tarefa.id,
        title: 'Estudar HTML e CSS',
        description: 'Assistir aula e colocar em prática',
        isCompleted: true,
        userId: tarefa.userId,
      })

      expect(response.statusCode).toEqual(201)
      expect(
        await prisma.tarefa.findFirst({
          where: {
            title: 'Estudar HTML e CSS',
          }
        })
      ).toEqual(
        expect.objectContaining({
          isCompleted: true
        })
      )
  })
})