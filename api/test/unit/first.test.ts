import Test from "../../src/test-class"

describe('test for test',()=>{
    it('one test',()=>{
        const test:Test = new Test()
        
        const result:boolean = test.greetin()
        console.log('prueba ci')
        
        expect(result).toBe(true)
    })
})