import * as express from 'express'
import * as cors from 'cors'
import { json, urlencoded } from 'body-parser'
import * as xss from 'xss-clean'
import * as helmet from 'helmet'
import * as morgan from 'morgan'

export const createServer = () => {
  const app = express()

  // Middlewares
  app.use(cors())
  app.use(json())
  app.use(urlencoded({ extended: false }))
  app.use(xss())
  app.use(helmet())
  app.use(morgan(':method :url :status (took :response-time ms)'))

  return app
}
