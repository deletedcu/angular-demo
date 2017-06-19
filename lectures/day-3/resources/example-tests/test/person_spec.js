var Person = require('../models/person');  // a reference to our model
var expect = require('chai').expect; // requiring the `expect` command

describe("Person", function() {
  describe("Constructor", function() {
    var matt = new Person("Matt");
    it("should create a new object", function() {   
      expect(typeof(matt)).to.equal("object");
    });
    
    it("should have a name", function() {
      expect(matt.name).to.not.be.empty;
    });

    it("should default <language> to 'English'", function() {
      expect(matt.language).to.equal("English");
    });
  });

  describe("greeting", function() {
    context("for default language (English)", function() {
      var bob = new Person("Bob");
      it("should offer a greeting in English", function() {
        expect(bob.greeting()).to.equal("Hello, my name is Bob.");
      });
    });
    context("when language is 'Italian'", function() {
      var tony = new Person("Tony", "Italian");
      it("should offer a greeting in Italian", function() {
        expect(tony.greeting()).to.equal("Ciao, mi chiamo Tony.");
      });
    });
  });
});
