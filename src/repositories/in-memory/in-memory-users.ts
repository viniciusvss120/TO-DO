import { Prisma } from "@prisma/client";
import { User, UserRepository } from "../users-repository";
import { randomUUID } from "crypto";

export class InMemoryUsers implements UserRepository {

  public items: User[] = []

  async findAll(): Promise<User[]> {
    const result = this.items

    return result
  }
  async findById(id: string): Promise<User | null> {
    const user = this.items.find(user => user.id === id)

    if (!user) {
      return null
    }

    return user
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.items.find(user => user.email === email)

    if (!user) {
      return null
    }

    return user
  }
  
  async create(data: User): Promise<User> {
    const user = {
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password
    }
    this.items.push(user)

    return user
  }

  async save(id: string, data: User): Promise<User> {
    const indexUser = await this.items.findIndex(item => item.id === id)

    console.log(id, this.items)
    if (indexUser < 0) {
      throw new Error('Cannot edit user !!')
    }
    this.items[indexUser] = data

    return this.items[indexUser]
  }

  async delete(user: User) {
    // console.log(user)
    const indexUser = await this.items.findIndex((index) => index.id === user.id)
    
    if (indexUser < 0) {
      throw new Error('Not found')
    }
    
    this.items.splice(indexUser, 1)
    console.log(this.items)
  }
}