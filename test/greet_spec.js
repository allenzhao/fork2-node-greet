var greet = require("../index");
describe('greet',function(){
        it("should greet a person by name", function(){
        	greet('zehan').should.be.a('string');
            greet('zehan').should.contain('hello');
            greet('zehan').should.contain('zehan');
        });
        it("should greet a person flirtatiously if drunk", function(){
        	greet('zehan',true).should.be.a('string');
        	greet('zehan',true).should.contain('hello');
        	greet('zehan',true).should.contain('zehan');
        	greet('zehan',true).should.contain('sexy');
        });
});
