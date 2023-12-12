import { logger } from "@vendetta";
import Settings from "./Settings";

export default {
    onLoad: () => {
        const o = () => {
      const n = i("getCurrentUser"),
        t = i("getSerializedState");
      (n.getCurrentUser().flags |= 1),
        n._dispatcher._actionHandlers
          ._computeOrderedActionHandlers("OVERLAY_INITIALIZE")
          .forEach(function (m) {
            m.name.includes("Experiment") &&
              m.actionHandler({
                serializedExperimentStore: t.getSerializedState(),
                user: { flags: 1 },
              });
          });
    };
    setTimeout(() => {
      o();
    }, 500);
    },
    onUnload: () => {
        logger.log("Goodbye, world.");
    },
    settings: Settings,
}
