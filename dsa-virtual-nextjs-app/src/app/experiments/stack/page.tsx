"use client";

import AlgorithmVisualizer from "@/components/AlgorithmVisualizer";
import type { VisualizerConfig } from "@/types/visualizer";

const stackConfig: VisualizerConfig = {
  title: "Stack (Linked List Implementation)",
  category: "Linear Structures",
  description:
    "Interactive visualization of a LIFO (Last-In-First-Out) stack implemented via linked nodes.",
  algorithmScript: "/lib/algorithms/StackLL.js",
  algorithmClass: "StackLL",
  canvasWidth: 800,
  canvasHeight: 400,
};

export default function StackExperiment() {
  return <AlgorithmVisualizer config={stackConfig} />;
}
