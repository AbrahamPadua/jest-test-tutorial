const mathOperations = require('./calculator');

describe('Calculator tests', () => {
  var input1 = 0
  var input2 = 0

  beforeAll(() => {
    console.log("beforeAll called");
  });

  afterAll(() => {
    console.log("afterAll called");
  });
  beforeEach(() => {
    console.log("beforeEach called");
    input1 = 1;
    input2 = 2;
  });
  afterEach(() => {
    console.log("afterEach called");
  });

  describe('Addition', () => {
    test('adding 1 + 2 should return 3', () => {
      const result = mathOperations.sum(1, 2);
      expect(result).toBe(3);
    });

    test('adding 45 + 27 should return 72', () => {
      const result = mathOperations.sum(45, 27);
      expect(result).toBe(72);
    });

    test('adding 163 + 364 should return 527', () => {
      const result = mathOperations.sum(163, 364);
      expect(result).toBe(527);
    });
  });

  describe('Subtraction', () => {
    test("subtracting 2 from 10 should return 8", () => {
      const result = mathOperations.diff(10, 2);
      expect(result).toBe(8);
    });

    test("subtracting 26 from 79 should return 8", () => {
      const result = mathOperations.diff(79, 26);
      expect(result).toBe(53);
    });

    test("subtracting 254 from 783 should return 8", () => {
      const result = mathOperations.diff(783, 254);
      expect(result).toBe(529);
    });
  });

  describe('Multiplication', () => {
    test("multiplying 2 and 8 should return 16", () => {
      const result = mathOperations.product(2, 8);
      expect(result).toBe(16);
    });

    test("multiplying 46 and 11 should return 506", () => {
      const result = mathOperations.product(46, 11);
      expect(result).toBe(506);
    });

    test("multiplying 152 and 253 should return 38456", () => {
      const result = mathOperations.product(152, 253);
      expect(result).toBe(38456);
    });
  });
});
