import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from "vitest";
import {app} from '../../../app'
import { prisma } from "../../../../lib/prisma";
import request from 'supertest'

describe('[PUT] Edit user', () => {
  beforeEach(async () => {
    await app.ready()
  })

  afterAll(async () => {
    // await dropAllTables()
    await app.close();
  });
  it('shoud be abble to edit and user', async () => {
    const user = await prisma.user.create({
      data: {
        name: 'Mamphis Silva',
        email: 'man320@live.com',
        password: '123456'
      } 
    })

    const response = await request(app.server)
      .put(`/users`)
      .send({
        id: user.id,
        name: 'Jonas Silva',
        email: 'jonasilva120@live.com',
        password: '123456'
      })
      // console.log(response.body)
      expect(response.statusCode).toEqual(204)
      expect(
        await prisma.user.findUnique({
          where: {
            id: user.id
          }
        })
      ).toEqual(
        expect.objectContaining({
          email: 'jonasilva120@live.com',
        })
      )
  })
})