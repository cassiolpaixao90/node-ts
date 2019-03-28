import * as dotenv from 'dotenv'

dotenv.config()

let path: string
switch (process.env.NODE_ENV) {
  case 'test':
    path = `.env.test`
    break
  case 'dev':
    path = `.env.dev`
    break
}

dotenv.config({ path: path })

export const APP_PORT = process.env.APP_PORT
