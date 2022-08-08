import { createMoBrixEngineAction } from "../../src/helpers/utils";

const createMoBrixEngineActionTests = () => {
  describe("\n   createMoBrixAction", () => {
    test("create a MoBrix-engine action with the given type", () => {
      const resultAction = createMoBrixEngineAction("@@test/action_without_payload");
      expect(resultAction.type).toBe("@@test/action_without_payload");
      expect(resultAction("test-payload").type).toBe(
        "@@test/action_without_payload"
      );
    });
    test("if getPayload is set, create a modular-engine action with the returned object inside payload", () => {
      const resultAction = createMoBrixEngineAction(
        "@@test/action_with_payload",
        (field) => ({ field })
      );
      expect(resultAction("test-payload").payload).toHaveProperty("field");
    });
    test("include match function inside every action creator, to compare modular-engine actions", () => {
      const resultAction = createMoBrixEngineAction("@@test/test_action");
      expect(
        resultAction.match(createMoBrixEngineAction("@@test/test_action"))
      ).toBe(true);
    });

    test("toString method called on a modular-engine action creator returns its type", () => {
      const resultAction = createMoBrixEngineAction("@@test/test_action");
      expect(resultAction.toString()).toBe("@@test/test_action");
    });
  });
};

export default createMoBrixEngineActionTests;
