import { createMoBrixEngineSelector } from "../../src/helpers/utils";

const createModularEngineSelectorTests = () => {
  describe("\n   createModularEngineSelector", () => {
    test("create a valid moduar-engine selector", () => {
      const resultSelector = createMoBrixEngineSelector(
        (input) => input.test,
        (test) => test
      );
      expect(resultSelector({ test: "test" })).toBe("test");
    });
  });
};

export default createModularEngineSelectorTests;
