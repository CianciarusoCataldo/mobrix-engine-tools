/**
 * @file {@link https://github.com/CianciarusoCataldo/mobrix-engine MoBrix-engine} internal actions
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */

import { MoBrixEngineConfig } from "mobrix-engine-types";

import { createMoBrixEngineAction } from "../../helpers/utils";

/**
 * Dispatched when {@link https://github.com/CianciarusoCataldo/mobrix-engine MoBrix-engine system} init is completed.
 * Intercept this action with an {@link https://redux-observable.js.org/docs/basics/Epics.html epic} or a generic {@link https://github.com/CianciarusoCataldo/mobrix-engine MoBrix-engine} middleware,
 * to execute some actions at the end of the init
 *
 * NOTE: don't dispatch this action into your app, outside the normal init process, as this would break the {@link https://github.com/CianciarusoCataldo/mobrix-engine MoBrix-engine} standard flow
 * (keep in mind that some plugins could use this action to coordinate their actions, assuming always the standard init process)
 *
 * @see https://cianciarusocataldo.github.io/mobrix-engine/docs
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright Cataldo Cianciaruso 2022
 */
export const engineInitCompleted = createMoBrixEngineAction(
  "@@MoBrix-engine/INIT_COMPLETED",
  (config?: MoBrixEngineConfig) => ({ payload: { parsedConfig: config } })
);
