import { createServer, connectToCockroachDb } from '@shared'
import routes from './routes'

const app = createServer()

app.use(routes)
connectToCockroachDb([], async conn => {
  console.log('Connected to CockroachDB 🪳')
  const server = app.listen(process.env.API_PORT, () => {
    console.log(`API Listening at ${process.env.API_PORT}`)
  })
  server.on('error', console.error)
})
