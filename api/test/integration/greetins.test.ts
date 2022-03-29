import app from "../../src/api"
import request from 'supertest'

describe('Route greetins', ()=>{
    it('exist route', async ()=>{
        const result = await request(app).get('/greetins')
        
        expect(result.statusCode).toEqual(200)
    })

    it('received personal greetin', async ()=>{
        const name:string = 'Jonay'
        const last_name:string = 'Castro'
        
        const result = await request(app)
        .get(`/greetins/${name}/${last_name}`)
        
        expect(result.body.greetin).toEqual('Hola Jonay Castro')
    })
})