/**
 * TypeScript declarations and types for the DSA Virtual Lab visualization engine.
 */

export interface AnimationManager {
  undoStack?: unknown[];
  addListener: (event: string, target: unknown, handler: () => void) => void;
  removeListener: (event: string, target: unknown, handler: () => void) => void;
  [key: string]: unknown;
}

export interface VisualizerConfig {
  title: string;
  category?: string;
  description?: string;
  algorithmScript: string;
  algorithmClass: string;
  canvasWidth?: number;
  canvasHeight?: number;
}

declare global {
  interface Window {
    canvas?: HTMLCanvasElement | null;
    currentAlg?: unknown;
    timer?: ReturnType<typeof setTimeout> | null;
    animationManager?: AnimationManager | null;
    objectManager?: unknown;
    init?: () => void;
    stepBackButton?: HTMLInputElement | null;
    stepForwardButton?: HTMLInputElement | null;
    skipBackButton?: HTMLInputElement | null;
    skipForwardButton?: HTMLInputElement | null;
    playPauseBackButton?: HTMLInputElement | null;
    animStarted?: () => void;
    animEnded?: () => void;
    animWaiting?: () => void;
    animUndoUnavailable?: () => void;
    [key: string]: unknown;
  }
}
