import { PrismaClient } from '@prisma/client';
import { execSync } from 'child_process';
import {config} from 'dotenv';
import { beforeAll } from 'vitest';
// import { Environment } from 'vitest';

config({ path: '.env', override: true });

// const prisma = new PrismaClient();




  // beforeAll(async () => {
  //   const schema = 'file:./test.db'
    
  //   // if(!process.env.DATABASE_URL) {
  //   //   throw new Error('Please provide a DATABASE_URL environment variable.')
  //   // }
  //   process.env.DATABASE_URL = schema
  //   console.log(process.env.DATABASE_URL)
  //   execSync('npx prisma migrate deploy')
  // })


