import {beforeEach, describe, expect, it} from 'vitest'
import { InMemoryUsers } from '../repositories/in-memory/in-memory-users'
import { DeleteUsersUseCase } from './delete-user-use-case'

let inMemoryUser: InMemoryUsers
let sut: DeleteUsersUseCase
describe('Delete users', () => {
  beforeEach(() => {
    inMemoryUser = new InMemoryUsers()
    sut = new DeleteUsersUseCase(inMemoryUser)
  
  })
  it('should be abble to delete users', async () => {
    const user = await inMemoryUser.create({
      id: 'user-1',
      name: 'Vinicius Silva',
      email: 'vinicius100@live.com',
      password: '123456'
    })

    await sut.execute({id: user.id})
    console.log(inMemoryUser.items)
    expect(inMemoryUser.items).toHaveLength(0)
  })
})