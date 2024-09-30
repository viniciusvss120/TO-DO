import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";
import {app} from '../../../app'
import { prisma } from "../../../../lib/prisma";
import request from 'supertest'
import { randomUUID } from "crypto";


describe('[POST] Create tarefa', () => {
  beforeEach(async () => {
    await app.ready()
    
  })

  afterAll(async () => {
    // await dropAllTables()
    await app.close();
  });
  it('shoud be abble to create and tarefa', async () => {
    // const user = await prisma.user.create({
    //   data: {
    //     name: 'Marcos Silva',
    //     email: 'marco320@live.com',
    //     password: '123456'
    //   } 
    // })
    const response = await request(app.server)
      .post('/tarefas')
      .send({
        title: 'Estudar React.js',
        description: 'Assistir aula e colocar em prática',
        userId: "1325f100-e221-4c6d-b4dd-2f8399843baa"
      })

      expect(response.statusCode).toEqual(201)
      expect(
        await prisma.tarefa.findFirst({
          where: {
            title: 'Estudar Vue.js'
          }
        })
      ).toEqual(
        expect.objectContaining({
          description: 'Assistir aula e colocar em prática',
        })
      )
  })
})