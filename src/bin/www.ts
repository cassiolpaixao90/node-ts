/* eslint-disable no-unreachable */
import http from 'http'
import chalk from 'chalk'
import app from '../config/Express'
import * as env from '../core/utils/utils.env'

class Bootstrap {
    private server: http.Server;
    public constructor () {
      this.server = http.createServer(app)
      this.init()
    }

    private init () : void {
      this.server.listen(env.APP_PORT)
      this.server.on('error', this.onError)
      this.server.on('listening', this.onListening)
    }

    private onError (error: NodeJS.ErrnoException): void {
      if (error.syscall !== 'listen') throw error
      let bind = typeof env.APP_PORT === 'string' ? 'Pipe ' + env.APP_PORT : 'Port ' + env.APP_PORT
      switch (error.code) {
        case 'EACCES':
          console.error(`${bind} requires elevated privileges`)
          process.exit(1)
          break
        case 'EADDRINUSE':
          console.error(`${bind} is already in use`)
          process.exit(1)
          break
        default:
          throw error
      }
    }

    private onListening (): void {
      console.log(`
        Localhost: ${chalk.magenta(`localhost:${env.APP_PORT}`)}
        ${chalk.green(`Press ${chalk.green('CTRL-C')} to stop`)}
      `)
    }
}

export default new Bootstrap()
