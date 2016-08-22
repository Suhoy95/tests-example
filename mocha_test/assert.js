import assert, {AssertionError} from "assert";

describe("assert methods", function() {

  it("#assert", function () {
    const str = "abc";
    assert(true);
    assert(str === "abc");
  });

  it("#deepEqual", function () {
    assert.deepEqual({a: {b: 1}}, {a: {b: 1}});
    assert.deepEqual({a: 1}, {a: "1"});
  });

  it("#deepEqualStrict", function () {
    assert.deepStrictEqual({a: 1}, {a: 1});

    assert.throws(() => assert.deepStrictEqual({a: 1}, {a: "1"}), AssertionError);
  });

});

