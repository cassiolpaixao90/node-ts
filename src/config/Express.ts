import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import { useExpressServer, useContainer } from 'routing-controllers'
import { Container } from 'typedi'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.routes()
    this.middlewares()
  }
  private middlewares () : void {
    this.express.use(cors())
    this.express.use(bodyParser.urlencoded({ extended: false }))
  }

  private database () :void{
    mongoose.connect('', { useNewUrlParser: true })
  }

  private routes () : void {
    // useContainer(Container)
    // useExpressServer(this.express, {
    //   controllers: ['./**/*.controller.*/**'],
    //   cors: true
    // })
  }
}
export default new App().express
