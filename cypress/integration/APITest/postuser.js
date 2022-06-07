/// <reference types ="Cypress"/>

describe('Post User', ()=>{
let randomText=""
let testEmail=""
    it("Post user Test case",()=>{
        var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < 5; i++)
        randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
        testEmail = randomText +'.'+randomText + '@gmail.com'

        cy.fixture('payload').then((file)=>{
        cy.request({
            method : 'POST',
            url  :'https://gorest.co.in/public/v2/users',
            headers :{
                'Authorization':'Bearer 0dbae83116390f0656710a7059969eaa589845ae10afed5b5a1280385ceb742f'
            },
            body :{
                               
                    "name": file.name,
                    "gender": file.gender,
                    "email": testEmail,
                    "status": file.status
                
                  }
            
                }).then((res)=>{
                    cy.log(JSON.stringify(res))
                    expect(res.status).to.eq(201)
                    cy.log("Tada ******************"+JSON.stringify(res.body.id))
                    expect(res.body).has.property('email', testEmail)
                    expect(res.body).has.property('name',file.name)
                    expect(res.body).has.property('status',file.status)
                    expect(res.body).has.property('gender',file.gender)
                   
                })
        })
    })

 });