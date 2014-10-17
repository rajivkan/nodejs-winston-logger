var expect = chai.expect;
describe('Sum', function(){
  describe('#sum 2 numbers', function(){
    it('should return 4 when add 2+2', function(){
      chai.assert.equal(4, (2+2));
    });

    it('substract 2 numbers', function(done){
    	var substract = function(a, b){
    		return (a-b);
    	}

		expect(substract(5,4)).to.equal(1);
  		done();
    });

  });
});