let myModule = require('../myModule')

it('should multiply two values', () => {
    expect(myModule.a({
        x: 10,
        y: 10
    })).toBe(100) 
})

it('should divide two values', () => {
    expect(myModule.b({
        x: 10,
        y: 10
    })).toBe(1) 
})

it('should add two values', () => {
    expect(myModule.c({
        x: 10,
        y: 10
    })).toBe(20) 
})