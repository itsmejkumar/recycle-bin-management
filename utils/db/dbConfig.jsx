// postgresql://neondb_owner:npg_r7YPVt0qLCWc@ep-falling-mode-a8bxmm0s-pooler.eastus2.azure.neon.tech/neondb?sslmode=require
import {neon} from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'
import * as schema from "./schema"


const sql = neon(process.env.DATABASE_URL)

export const db = drizzle(sql,{schema})