import {beforeEach, describe, expect, it} from 'vitest'
import { InMemoryUsers } from '../repositories/in-memory/in-memory-users'
import { CreateUsersUseCase } from './create-users'
import { GetUsersUseCase } from './get-users-use-case'
import { AuthenticateUseCase } from './authenticate'
import { hash } from 'bcrypt'

let inMemoryUser: InMemoryUsers
let sut: AuthenticateUseCase
describe('Authenticate users', () => {
  beforeEach(() => {
    inMemoryUser = new InMemoryUsers()
    sut = new AuthenticateUseCase(inMemoryUser)
  
  })
  it('should be abble to authenticate a user', async () => {
    await inMemoryUser.create({
      name: 'Vinicius Silva',
      email: 'vinicius100@live.com',
      password: await hash('123456', 8)
    })

    const authenticate = await sut.execute({
      email: 'vinicius100@live.com',
      password: '123456'
    })

    expect(authenticate).toEqual({
      token: expect.any(String),
    })
  })
})