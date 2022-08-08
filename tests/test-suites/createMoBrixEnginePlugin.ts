import { MoBrixEnginePluginInteraction } from "mobrix-engine-types";
import { createMoBrixEnginePlugin } from "../../src/helpers/utils";

const createMoBrixEnginePluginTests = () => {
  describe("\n   createMoBrixEnginePlugin", () => {
    describe("\n     create a valid modular-engine plugin", () => {
      test("with callback", () => {
        const resultPlugin = createMoBrixEnginePlugin("test-feature", () => ({
          interactions: [] as MoBrixEnginePluginInteraction[],
        }));
        expect(resultPlugin.feature).toBe("test-feature");
        expect(resultPlugin.toString()).toBe(
          "MoBrix-engine plugin test-feature"
        );
        expect(
          resultPlugin.match(createMoBrixEnginePlugin("test-feature"))
        ).toBe(true);

        expect(resultPlugin()).toStrictEqual({
          interactions: [],
        });
      });

      test("without callback", () => {
        const resultPlugin = createMoBrixEnginePlugin("test-feature");
        expect(resultPlugin.feature).toBe("test-feature");
        expect(resultPlugin.toString()).toBe(
          "MoBrix-engine plugin test-feature"
        );
        expect(
          resultPlugin.match(createMoBrixEnginePlugin("test-feature"))
        ).toBe(true);
        expect(resultPlugin()).toStrictEqual({});
      });
    });
  });
};

export default createMoBrixEnginePluginTests;
