import expect from "expect.js";


describe("expect.js methods", function () {

  it("#ok", function () {
    expect(1).to.be.ok();
    expect(true).to.be.ok();
    expect({}).to.be.ok();
    expect(0).to.not.be.ok();
  });

  it("#be / equal", function () {
    expect(1).to.be(1);
    expect(NaN).not.to.equal(NaN);
    expect(1).not.to.be(true);
    expect("1").to.not.be(1);
  });


  it("#eql", function () {
    expect({a: "b"}).to.eql({a: "b"});
    expect(1).to.eql("1");
  });

  it("#a / an", function () {
    expect(5).to.be.a("number");
    expect([]).to.be.an("array");
    expect([]).to.be.an("object");
  });

  it("#contaian", function () {
    expect([1, 2]).to.contain(1);
    expect("hello world").to.contain("world");
  });

  it("#thowException", function () {
    function fn(a) {
      if (a === 1) {
        throw new Error();
      }
    }
    expect(fn).withArgs(1).to.throwException();
  });

});
