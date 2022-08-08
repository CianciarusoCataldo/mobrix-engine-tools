/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-engine MoBrix-engine} `config` slice selectors
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import {
  MoBrixEngineConfigState,
  MoBrixEngineGlobalState,
} from "mobrix-engine-types";

import { createMoBrixEngineSelector } from "../../helpers/utils";

import defaultConfig from "./initial-state";

/**
 * Returns all  {@link https://github.com/CianciarusoCataldo/mobrix-engine MoBrix-engine} shared config parameters, saved into the `config` state
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const getConfig = (
  state?: MoBrixEngineGlobalState
): MoBrixEngineConfigState => state.config || defaultConfig;

/**
 * Returns {@link https://github.com/CianciarusoCataldo/mobrix-engine MoBrix-engine} config `appName` parameter
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 *
 */
export const getAppName = createMoBrixEngineSelector(
  getConfig,
  ({ appName }) => appName
);
