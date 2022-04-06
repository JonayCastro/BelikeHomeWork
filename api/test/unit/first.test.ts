import Test from "../../src/test-class"

describe('test for test',()=>{
    it('one test',()=>{
        const test:Test = new Test()
        
        const result:boolean = test.greeting()
        
        expect(result).toBe(true)
    })
})