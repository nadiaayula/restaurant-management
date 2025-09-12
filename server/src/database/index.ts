import envConfig from '@/config'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  datasourceUrl: envConfig.DATABASE_URL,
  log: ['error', 'warn', 'info']
})

export default prisma
