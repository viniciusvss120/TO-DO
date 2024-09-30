import {beforeEach, describe, expect, it} from 'vitest'
import { InMemoryUsers } from '../repositories/in-memory/in-memory-users'
import { CreateUsersUseCase } from './create-users'
import { GetUsersUseCase } from './get-users-use-case'

let inMemoryUser: InMemoryUsers
let sut: GetUsersUseCase
describe('Get users', () => {
  beforeEach(() => {
    inMemoryUser = new InMemoryUsers()
    sut = new GetUsersUseCase(inMemoryUser)
  
  })
  it('should be abble to get users', async () => {
    const user = await inMemoryUser.create({
      name: 'Vinicius Silva',
      email: 'vinicius100@live.com',
      password: '123456'
    })

    const getUsers = await sut.execute()

    expect(getUsers.user).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          email: 'vinicius100@live.com'
        })
      ])
    )
  })
})