import { Request, Response, Router } from 'express'

const Greetins = Router()

Greetins.get('/', (req: Request, res: Response) => {
    res.send(200)
})

Greetins.get('/:name/:last_name', (req: Request, res:Response) => {
    const name:string = req.params.name
    const last_name:string = req.params.last_name
    
    res.send({greetin:`Hola ${name} ${last_name}`})
})

export default Greetins