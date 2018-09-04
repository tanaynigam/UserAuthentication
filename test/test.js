var assert = require('assert');
var sinon = require('sinon');
//var expect = require('expect.js');
// var sample_response = require('./resources/sample_response.json')
// var sample_response2 = require('./resources/sample_response2.json')
// var chai = require('chai');
// var chaiHttp = require('chai-http');
var index = require('../index.js');


// chai.use(chaiHttp);
// chai.should();

describe('User Authentication Unit Test', function(){ 
	beforeEach(function(){
	});

	afterEach(function(){
	})

	describe('Test checkPassword', function(){
		it(' should redirect to the right page', (done) =>{
			var callback = sinon.stub(index.checkPassword('password', 'password')).returns('logged in')
			var callback = sinon.stub(index.checkPassword('password', 'not password')).returns('not logged')
			

		})

	})

})