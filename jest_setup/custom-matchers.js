const customMatchers = {
  toBeWithinRange(actual, min, max) {
    if (typeof actual !== "number") {
      throw new Error("Actual value must be a number");
    }
    const pass = actual >= min && actual <= max;
    return {
      pass,
      message: pass
        ? () => `expected ${actual} not to be within range (${min}..${max})`
        : () => `expected ${actual} to be within range (${min}..${max})`,
    };
  },
};

console.log("From custom matchers file: ", expect.name);

expect.extend(customMatchers);
