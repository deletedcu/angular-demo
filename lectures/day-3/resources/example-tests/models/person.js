function Person (name, language) {
  this.name = name;
  this.language = language || "English";
}

Person.prototype.greeting = function () {
  switch (this.language) {
    case "English":
      return "Hello, my name is " + this.name + ".";
    case "Italian":
      return "Ciao, mi chiamo " + this.name + ".";
    default:
      throw "The language " + this.language + " is not supported.";
  }
};

module.exports = Person;