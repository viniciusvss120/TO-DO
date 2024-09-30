import {beforeEach, describe, expect, it} from 'vitest'
import { InMemoryUsers } from '../repositories/in-memory/in-memory-users'
import { EditUsersUseCase } from './edit-user-use-case'
import { hash } from 'bcrypt'

let inMemoryUser: InMemoryUsers
let sut: EditUsersUseCase
describe('Edit users', () => {
  beforeEach(() => {
    inMemoryUser = new InMemoryUsers()
    sut = new EditUsersUseCase(inMemoryUser)
  
  })
  it('should be abble to edit users', async () => {
    await inMemoryUser.create({
      id: 'user-1',
      name: 'Vinicius Silva',
      email: 'vinicius100@live.com',
      password: '123456'
    })

    const editUsers = await sut.execute({
      id: 'user-1',
      name: 'Vinicius Silva Souza',
      email: 'vinicius100@live.com',
      password: '654321'
    })

    expect(editUsers.user).toEqual( 
      expect.objectContaining({
        name: 'Vinicius Silva Souza',
      })
    )
  })
})