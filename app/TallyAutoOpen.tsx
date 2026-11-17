"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string) => void;
    };
  }
}

export default function TallyAutoOpen() {
  useEffect(() => {
    let attempts = 0;
    const openWhenReady = () => {
      if (window.Tally) {
        window.Tally.openPopup("9q8l55");
        return true;
      }
      return false;
    };

    if (openWhenReady()) return;
    const interval = window.setInterval(() => {
      attempts += 1;
      if (openWhenReady() || attempts >= 30) window.clearInterval(interval);
    }, 200);

    return () => window.clearInterval(interval);
  }, []);

  return null;
}
