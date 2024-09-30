import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it } from "vitest";
import {app} from '../../../app'
import { prisma } from "../../../../lib/prisma";
import request from 'supertest'
describe('[DELETE] Delete user', () => {
  // beforeAll( async() => {
    
  // })
  beforeEach(async () => {
    await app.ready()
    
  })

  afterAll(async () => {
    // await dropAllTables()
    await app.close();
  });
  it('shoud be abble to delete and user', async () => {
    const user = await prisma.user.create({
      data: {
        name: 'Roni Silva',
        email: 'roni220@live.com',
        password: '123456'
      } 
    })
    
    const response = await request(app.server)
      .delete(`/users/${user.id}`)
      .send()

      expect(response.statusCode).toEqual(204)
      expect(
        await prisma.user.findUnique({
          where: {
            id: user.id
          }
        })
      ).toBeNull()
  })
})