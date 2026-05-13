import { logEvent } from "firebase/analytics";
import { firebaseAnalytics } from "./firebase-config";

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

const trackAnalyticsEvent = (
  eventName: string,
  params?: AnalyticsParams
): void => {
  firebaseAnalytics.then((analytics) => {
    if (!analytics) return;

    const cleanedParams = Object.fromEntries(
      Object.entries(params || {}).filter(([, value]) => value !== undefined)
    );

    logEvent(analytics, eventName, cleanedParams);

    if (window.location.hostname === "localhost") {
      // Helps confirm custom events are being sent when checking Firebase DebugView locally.
      // eslint-disable-next-line no-console
      console.info(`Firebase Analytics event sent: ${eventName}`, cleanedParams);
    }
  });
};

export default trackAnalyticsEvent;
