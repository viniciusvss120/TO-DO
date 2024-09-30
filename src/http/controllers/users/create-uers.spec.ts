import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";
import {app} from '../../../app'
import { prisma } from "../../../../lib/prisma";
import request from 'supertest'
import { dropAllTables } from "test/dropTablesSqlite";
import { afterEach } from "node:test";
import { execSync } from "node:child_process";

describe('[POST] Create user', () => {
  beforeEach(async () => {
    await app.ready()
    
  })

  afterAll(async () => {
    // await dropAllTables()
    await app.close();
  });
  it('shoud be abble to create and user', async () => {
    const response = await request(app.server)
      .post('/users')
      .send({
        name: 'Valdir Silva',
        email: 'valdir120@live.com',
        password: '123456'
      })

      expect(response.statusCode).toEqual(201)
  })
})