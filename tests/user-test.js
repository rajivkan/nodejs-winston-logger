var mocha = require('mocha')
  , chai = require('chai')
  , sinon = require('sinon')

require('mocha-as-promised')(mocha)
chai.should()
chai.use(require('chai-as-promised'))
chai.use(require('sinon-chai'))
var expect = chai.expect;

var user = require('../user.js')();
describe('User', function () {
  before(function () {
    user.setUser({name: "Rajiv"});
  });

  it('get user name', function () {
	expect(user.getUserName()).to.equal("Rajiv");
  });

});