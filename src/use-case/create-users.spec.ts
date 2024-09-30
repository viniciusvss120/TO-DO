import {beforeEach, describe, expect, it} from 'vitest'
import { InMemoryUsers } from '../repositories/in-memory/in-memory-users'
import { CreateUsersUseCase } from './create-users'

let inMemoryUser: InMemoryUsers
let sut: CreateUsersUseCase
describe('Create users', () => {
  beforeEach(() => {
    inMemoryUser = new InMemoryUsers()
    sut = new CreateUsersUseCase(inMemoryUser)
  })
  it('should be abble to create a user', async () => {
    const user = {
      name: 'Vinicius Silva',
      email: 'vinicius100@live.com',
      password: '123456'
    }

    await sut.execute(user)

    expect(inMemoryUser.items).toHaveLength(1)
    expect(inMemoryUser.items).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          email: 'vinicius100@live.com'
        })
      ])
    )
  })
})