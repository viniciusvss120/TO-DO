import {Prisma} from '@prisma/client'

export interface User {
  id?: string
  name: string
  email: string
  password: string

}

export interface UserRepository {
  findAll(): Promise<User[]>
  findById(id: string): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
  create(user: User): Promise<User>
  save(id: string, user: Prisma.UserCreateInput): Promise<User>
  delete(user: Prisma.UserCreateInput): Promise<void>
}