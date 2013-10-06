describe('fibonacci', function() {
  it("will return error if 0 is inputted", function() {
    fibonacci(0).should.equal("error");
  });

  it("will return 0 if 1 is inputted", function() {
    fibonacci(1).should.equal(0);
  });

  it("will return 1 if 2 is inputted", function() {
    fibonacci(2).should.equal(1);
  });

  it("will return 21 if 9 is inputted", function() {
    fibonacci(9).should.equal(21);
  });

  it("will return 55 if 11 is inputted", function() {
    fibonacci(11).should.equal(55);
  });
});
describe('fibArray', function() {
  it("will create an array of fibonacci numbers up to desired number in the fibonacci sequence", function() {
    fibArray(5).should.eql([0,1,1,2,3]);
  });
});