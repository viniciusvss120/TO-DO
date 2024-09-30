import { execSync } from 'child_process';
import 'dotenv'
import { Environment } from 'vitest';
import { PrismaClient } from '@prisma/client';


// Após criar esse ambiente de test do prisma é preciso acesar essa pasta e rodar o npm link

const prisma = new PrismaClient();


export default <Environment> {
  name: 'prisma',
  transformMode: 'ssr',

  async setup() {
    const schema = 'file:./test.db'
    
    if(!process.env.DATABASE_URL) {
      throw new Error('Please provide a DATABASE_URL environment variable.')
    }
    console.log(schema)
    process.env.DATABASE_URL = schema
    execSync('npx prisma migrate deploy')
    return {
      async teardown() {
        
      },
      }
    }
  }


