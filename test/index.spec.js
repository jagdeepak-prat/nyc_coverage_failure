let chai = require('chai')
let should = chai.should();
let server = require('../index');

describe("DUMMY TEST",()=>{
    it(" Should print hello world",(done)=>{
            let res= server.hello();
            res.should.be.equal("hello world");
            done();

    })
    it(" Should print hello world from dependency",(done)=>{
            let res=server.hello_from_dependency();
            res.should.be.equal("hello from node dependency")
            done();
    })
})
