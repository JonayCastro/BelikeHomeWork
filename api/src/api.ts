import express from 'express'
import Greetins from './routes/greetins'

const app = express()

app.use('/greetins',Greetins)

export default app