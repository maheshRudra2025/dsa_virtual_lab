"use client";

import AlgorithmVisualizer from "@/components/AlgorithmVisualizer";
import type { VisualizerConfig } from "@/types/visualizer";

const queueConfig: VisualizerConfig = {
  title: "Queue (Linked List Implementation)",
  category: "Linear Structures",
  description:
    "Interactive visualization of a FIFO (First-In-First-Out) queue implemented via linked nodes.",
  algorithmScript: "/lib/algorithms/QueueLL.js",
  algorithmClass: "QueueLL",
  canvasWidth: 800,
  canvasHeight: 400,
};

export default function QueueExperiment() {
  return <AlgorithmVisualizer config={queueConfig} />;
}
