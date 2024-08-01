const arrayUtils = require("../index");

describe("Array Utilities", function () {
  const sampleArray = [1, 2, 2, 3, 4, 5, 5];

  describe("safeGet", function () {
    test("should return the element at the given index", function () {
      expect(arrayUtils.safeGet(sampleArray, 2)).toBe(2);
    });

    test("should return undefined for out of bounds index", function () {
      expect(arrayUtils.safeGet(sampleArray, 10)).toBe(undefined);
    });

    test("should throw TypeError for invalid index", function () {
      expect(() => arrayUtils.safeGet(sampleArray, "a")).toThrow(TypeError);
    });
  });

  describe("unique", function () {
    test("should remove duplicates from the array", function () {
      expect(arrayUtils.unique(sampleArray)).toEqual([1, 2, 3, 4, 5]);
    });

    test("should throw TypeError if input is not an array", function () {
      expect(() => arrayUtils.unique("string")).toThrow(TypeError);
    });
  });

  describe("intersect", function () {
    test("should return the intersection of two arrays", function () {
      const arr1 = [1, 2, 3];
      const arr2 = [2, 3, 4];
      expect(arrayUtils.intersect(arr1, arr2)).toEqual([2, 3]);
    });

    test("should throw TypeError if either argument is not an array", function () {
      expect(() => arrayUtils.intersect("string", [1, 2])).toThrow(TypeError);
      expect(() => arrayUtils.intersect([1, 2], "string")).toThrow(TypeError);
    });
  });

  describe("Array Method Wrappers", function () {
    test("should handle push method correctly", function () {
      const arr = [1, 2, 3];
      arrayUtils.push(arr, 4);
      expect(arr).toEqual([1, 2, 3, 4]);
    });

    test("should handle pop method correctly", function () {
      const arr = [1, 2, 3, 4];
      const result = arrayUtils.pop(arr);
      expect(result).toBe(4);
      expect(arr).toEqual([1, 2, 3]);
    });

    test("should handle map method correctly", function () {
      const result = arrayUtils.map(sampleArray, (x) => x * 2);
      expect(result).toEqual([2, 4, 4, 6, 8, 10, 10]);
    });

    // todo
  });
});
