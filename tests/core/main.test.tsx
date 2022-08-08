import PKG from "../../package.json";

import createMoBrixEngineActionTests from "../test-suites/createMoBrixEngineAction";
import createMoBrixEnginePluginTests from "../test-suites/createMoBrixEnginePlugin";
import createMoBrixEngineReducerTests from "../test-suites/createMoBrixEngineReducer";
import createMoBrixEngineSelectorTests from "../test-suites/createModularEngineSelector";
import engineInternalTests from "../test-suites/engine-internal";

describe(`\n        ## ${PKG.name} v${PKG.version} - unit tests ##        \n`, () => {
  createMoBrixEngineActionTests();
  createMoBrixEngineReducerTests();
  createMoBrixEngineSelectorTests();
  createMoBrixEnginePluginTests();
  engineInternalTests();
});
