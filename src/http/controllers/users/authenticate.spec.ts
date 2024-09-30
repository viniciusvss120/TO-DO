import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";
import {app} from '../../../app'
import { prisma } from "../../../../lib/prisma";
import request from 'supertest'
import { hash } from "bcrypt";
import { afterEach } from "node:test";

describe('[POST] Authenticate user', () => {
  // beforeAll( async() => {

  // })
  beforeEach(async () => {
    await app.ready()
    
  })

  afterAll(async () => {
    
    await app.close();
  });
  it('shoud be abble to authenticate and user', async () => {
    await prisma.user.create({
      data: {
        name: 'Mari Silva',
        email: 'jona220@live.com',
        password: await hash('123456', 8)
      } 
    })

    const response = await request(app.server)
      .post(`/login`)
      .send({
        email: 'jona220@live.com',
        password: '123456'
      })
      // console.log(response.body)
      expect(response.statusCode).toEqual(200)
      expect(
        response.body
      ).toEqual(
        expect.objectContaining({
          token: expect.any(String)
        })
      )
  })
})