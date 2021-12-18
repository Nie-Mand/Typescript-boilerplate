import 'reflect-metadata'
import { createConnection } from 'typeorm'

export const connectToCockroachDb = (entities, cb) => {
  const config = {
    type: 'cockroachdb',
    host: process.env.COCKROACHDB_HOST,
    port: process.env.COCKROACHDB_PORT,
    username: process.env.COCKROACHDB_USERNAME,
    password: process.env.COCKROACHDB_PASSWORD,
    database: process.env.COCKROACHDB_DATABASE,
    entities,
    synchronize: true,
    logging: true,
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  }

  return createConnection(config as any)
    .then(cb)
    .catch(console.error)
}
