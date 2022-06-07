/// <reference types ="Cypress"/>

describe('Get user API',()=>{

    it('Get user',()=>{
        cy.request({
            method : 'GET',
            url  :'https://reqbin.com/echo/get/json',
            headers :{
                'Accept': 'application/json'
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.success).to.eq('true')
        })

    })

}

)