const require = require('supertest');
const server = require('../createServer');
const expect = require("chai").expect


describe('API tests', ()=>{
    let api;

    before(()=>{
        api = server.listen(5000, ()=> console.log('\nTesting server is online\n'))
    });

    after(done=>{
        console.log('\nServer is Offline\n');
        api.close(done);
    })

    //Tests:
})