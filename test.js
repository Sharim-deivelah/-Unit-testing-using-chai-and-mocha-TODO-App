let chai =require('chai');
let chaiHttp = require('chai-http');


chai.should();
chai.use(chaiHttp);

describe('App unit testing',()=>{
     var host = "http://localhost:5500";

        it("should get",(done)=>{
            chai.request(host).get("/api/items").end((err,response)=>{
                response.should.have.status(200);
                response.body.should.be.a('array');
                done();
            })
            
        })
    
})


describe('App unit testing',()=>{
    var host = "http://localhost:5500";

       it("should save",(done)=>{
        const data= {
            name:'Manjeit',
            salary:50908
        }
           chai.request(host).post("/api/item").send(data).end((err,response)=>{
               response.should.have.status(200);
               response.body.should.be.a('object');
               done();
           })
           
       })
      
})


describe('App unit testing',()=>{
    var host = "http://localhost:5500";

       it("should update",(done)=>{
        const data= {
            name:'Manjeit Singh',
            salary:60000
        }
           chai.request(host).put('/api/item/:id').send(data).end((err,response)=>{
               response.should.have.status(200);
               response.body.should.be.a('object');
               done();
           })
           
       })
   
})


describe('App unit testing',()=>{
    var host = "http://localhost:5500";

       it("should delete",(done)=>{
        const data= {
            name:'Manjeit',
            salary:50908
        }
           chai.request(host).delete('/api/item/:id').send(data).end((err,response)=>{
               response.should.have.status(200);
               response.body.should.be.a('object');
               done();
           })
           
       })
   
})