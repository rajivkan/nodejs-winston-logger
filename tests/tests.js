var mocha = require('mocha')
  , chai = require('chai')
  , sinon = require('sinon')

require('mocha-as-promised')(mocha)
chai.should()
chai.use(require('chai-as-promised'))
chai.use(require('sinon-chai'))


  var logger = require('../logger.js')()

describe('Test: Logger', function() {
	
	 it('info', function(){
	 	logger.info("test info");
    });

	 it('error', function(){
	 	logger.error("test error");
    });
});