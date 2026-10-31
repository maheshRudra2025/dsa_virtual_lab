"use client";

import { useEffect, useRef, useState } from "react";
import type { VisualizerConfig } from "@/types/visualizer";

const BASE_CSS = ["/lib/third-party/jquery-ui-1.8.11.custom.css"];

const BASE_SCRIPTS = [
  "/lib/third-party/jquery-1.5.2.min.js",
  "/lib/third-party/jquery-ui-1.8.11.custom.min.js",
  "/lib/animations/CustomEvents.js",
  "/lib/animations/UndoFunctions.js",
  "/lib/animations/AnimatedObject.js",
  "/lib/animations/AnimatedLabel.js",
  "/lib/animations/AnimatedCircle.js",
  "/lib/animations/AnimatedRectangle.js",
  "/lib/animations/AnimatedLinkedList.js",
  "/lib/animations/HighlightCircle.js",
  "/lib/animations/Line.js",
  "/lib/animations/ObjectManager.js",
  "/lib/animations/AnimationMain.js",
  "/lib/algorithms/Algorithm.js",
];

const loadScript = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = src;
    script.type = "text/javascript";
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(script);
  });
};

const loadCSS = (href: string): void => {
  if (document.querySelector(`link[href="${href}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
};

export function useAlgorithmVisualizer(config: VisualizerConfig) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isCancelled = false;

    const setupControls = () => {
      const am = window.animationManager;
      if (!am) return;

      window.animUndoUnavailable = () => {
        if (window.stepBackButton) window.stepBackButton.disabled = true;
        if (window.skipBackButton) window.skipBackButton.disabled = true;
      };

      window.animWaiting = () => {
        if (window.stepForwardButton) window.stepForwardButton.disabled = false;
        if (window.skipForwardButton) window.skipForwardButton.disabled = false;
        if (window.playPauseBackButton) {
          window.playPauseBackButton.disabled = false;
          window.playPauseBackButton.value = "Play";
        }
        if (am.undoStack && am.undoStack.length > 0) {
          if (window.stepBackButton) window.stepBackButton.disabled = false;
          if (window.skipBackButton) window.skipBackButton.disabled = false;
        }
      };

      window.animStarted = () => {
        if (window.stepForwardButton) window.stepForwardButton.disabled = true;
        if (window.skipForwardButton) window.skipForwardButton.disabled = false;
        if (window.playPauseBackButton) {
          window.playPauseBackButton.disabled = false;
          window.playPauseBackButton.value = "Pause";
        }
      };

      window.animEnded = () => {
        if (window.stepForwardButton) window.stepForwardButton.disabled = true;
        if (window.skipForwardButton) window.skipForwardButton.disabled = true;
        if (window.playPauseBackButton) {
          window.playPauseBackButton.disabled = true;
          window.playPauseBackButton.value = "Play";
        }
        if (am.undoStack && am.undoStack.length > 0) {
          if (window.stepBackButton) window.stepBackButton.disabled = false;
          if (window.skipBackButton) window.skipBackButton.disabled = false;
        }
      };

      try {
        am.removeListener("AnimationStarted", window, window.animStarted!);
        am.removeListener("AnimationEnded", window, window.animEnded!);
        am.removeListener("AnimationWaiting", window, window.animWaiting!);
        am.removeListener("AnimationUndoUnavailable", window, window.animUndoUnavailable!);
      } catch {
        // Safe to ignore if listeners were not registered yet
      }

      am.addListener("AnimationStarted", window, window.animStarted!);
      am.addListener("AnimationEnded", window, window.animEnded!);
      am.addListener("AnimationWaiting", window, window.animWaiting!);
      am.addListener("AnimationUndoUnavailable", window, window.animUndoUnavailable!);

      const buttons = [
        window.stepBackButton,
        window.stepForwardButton,
        window.skipBackButton,
        window.skipForwardButton,
        window.playPauseBackButton,
      ];
      buttons.forEach((btn) => {
        if (btn) btn.disabled = true;
      });
    };

    const initialize = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Load CSS stylesheets
        BASE_CSS.forEach(loadCSS);

        // Load base animation and algorithm scripts sequentially
        for (const script of BASE_SCRIPTS) {
          if (isCancelled) return;
          await loadScript(script);
        }

        // Load algorithm-specific script
        if (isCancelled) return;
        await loadScript(config.algorithmScript);

        if (isCancelled) return;

        // Verify canvas reference
        const canvas = canvasRef.current;
        if (!canvas) {
          throw new Error("Canvas element not found in DOM");
        }
        window.canvas = canvas;

        // Initialize visualization engine
        if (typeof window.init === "function") {
          window.init();
          setTimeout(() => {
            if (!isCancelled) {
              setupControls();
              setIsReady(true);
              setIsLoading(false);
            }
          }, 300);
        } else {
          setIsReady(true);
          setIsLoading(false);
        }
      } catch (err) {
        if (!isCancelled) {
          console.error("Visualizer initialization error:", err);
          setError(err instanceof Error ? err.message : "Failed to load visualization engine");
          setIsLoading(false);
        }
      }
    };

    initialize();

    return () => {
      isCancelled = true;
      if (window.timer) {
        clearTimeout(window.timer);
        window.timer = null;
      }
      window.currentAlg = null;
      window.animationManager = null;
      window.objectManager = null;
      window.canvas = null;
    };
  }, [config.algorithmScript, config.algorithmClass]);

  return { canvasRef, isLoading, error, isReady };
}
