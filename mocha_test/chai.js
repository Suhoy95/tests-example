import {assert} from "chai";

describe("chai@assert", function () {
  const foo = "bar", beverages = {tea: ["chai", "matcha", "oolong"]};

  it("#typeOf", function () {
    assert.typeOf(foo, "string");
    assert.typeOf(foo, "string", "foo is a string");
  });

  it("#equal", function () {
    assert.equal(foo, "bar");
  });

  it("#lengthOf", function () {
    assert.lengthOf(foo, 3);
    assert.lengthOf(beverages.tea, 3);
  });
});

import {expect} from "chai";

describe("chai@expect", function () {
  const foo = "bar", beverages = {tea: ["chai", "matcha", "oolong"]};

  it("#to.be", function () {
    expect(foo).to.be.a("string");
  });

  it("#to.equal", function () {
    expect(foo).to.equal("bar");
  });

  it("#to.have.length", function () {
    expect(foo).to.have.length(3);
    expect(beverages).to.have.property("tea").with.length(3);
  });
});

import chai from "chai";
chai.should();

describe("chai@should", function () {
  const foo = "bar", beverages = {tea: ["chai", "matcha", "oolong"]};
  chai.should();

  it("#to.be", function () {
    foo.should.be.a("string");
  });

  it("#to.equal", function () {
    foo.should.equal("bar");
  });

  it("#to.have.length", function () {
    foo.should.have.length(3);
    beverages.should.have.property("tea").with.length(3);
  });
});

