/// <reference types="cypress" />

it('Equality', ()=>{
    const a = 1

    expect(a).to.be.equal(1)
})

it('Truthy', ()=>{
    const a = true
    const b = null
    let c

    expect(a).to.be.true
    expect(true).to.be.true
    expect(b).to.be.null
    expect(c).to.be.undefined
})

it('Object Equality', ()=>{
    const obj = {
        a:1,
        b:2
    }

    expect(obj).to.eql(obj)
    expect(obj).include({a: 1})
    expect(obj).to.have.property('b')
})

it('Array', ()=>{
    const arr = [1,2,3]

    expect(arr).to.have.members([1,2,3])
})

it('Types', ()=>{
    const num =1
    const str = 'igor'

    expect(num).to.have.a('number')
    expect(str).to.have.a('string')
})

it('String', ()=>{
    const str = 'igor'

    expect(str).to.have.length(4)
    expect(str).to.contains('ig')
    expect(str).to.match(/ig/)
    expect(str).to.match(/^String/)
    expect(str).to.match(/ig$/)
    expect(str).to.match(/\w+/)

})

it('Numbers', ()=>{
    const number = 4
    const floatNumber = 1.2 

    expect(number).to.be.above(4)
    expect(floatNumber).to.be.closeTo(1.2)

})