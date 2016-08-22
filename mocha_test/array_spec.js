import assert from "assert";

describe("Array", function () {

  describe("#length", function () {

    it("should be a number", function() {
      assert.equal(typeof [].length, "number");
    });

    it("should be a number of elements in array", function () {
      assert.equal([1, 2, 3].length, 3);
    });
  });

  describe("#indexOf", function () {

    it("should return number", function () {
      assert.equal(typeof [].indexOf(0), "number");
    });

    it("should return index of the element in array", function () {
      assert.equal([1, 2, 3].indexOf(2), 1);
    });

    it("should return -1 if array doesn't contain the element", function () {
      assert.equal([1, 2].indexOf(3), -1);
    });
  });

});
