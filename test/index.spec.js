let chai = require('chai')
let server = require('../index');
chai.should();
describe("DUMMY TESTS",()=>{
    it(" Should print hello world",()=>{
            return server.hello().then(res=>{
                console.log("** output from function call ** ",res);
                res.should.be.equal("hello world");
            })
    })
    it(" Should print hello world from dependency",()=>{
            return server.hello_from_dependency().then(res=>{
                console.log("** output from function call ** ",res);
                res.should.be.equal("hello from node dependency");
            })            
    })
})
