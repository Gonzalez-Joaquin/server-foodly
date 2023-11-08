import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import index from './routes/index.routes'
import users from './routes/user.routes'
import food from './routes/food.routes'

class App {
    private App: express.Application

    constructor(private PORT?: number | string) {
        this.App = express()
        this.Settings()
        this.MiddleWares()
        this.Routes()
    }

    Settings() { this.App.set('port', this.PORT || process.env.PORT || 5000) }

    MiddleWares() {
        this.App.use(morgan('dev'))
        this.App.use(express.json())
        this.App.use(cors())
    }

    Routes() {
        this.App.use(index)
        this.App.use('/users', users)
        this.App.use('/food', food)
    }

    async Listen(): Promise<void> {
        await this.App.listen(this.App.get('port'))
        console.log('Server running in Port:', this.App.get('port'))
    }
}

export default App