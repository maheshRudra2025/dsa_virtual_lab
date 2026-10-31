"use client";

import React from "react";
import Link from "next/link";
import { useAlgorithmVisualizer } from "@/hooks/useAlgorithmVisualizer";
import type { VisualizerConfig } from "@/types/visualizer";

interface AlgorithmVisualizerProps {
  config: VisualizerConfig;
}

export default function AlgorithmVisualizer({ config }: AlgorithmVisualizerProps) {
  const { canvasRef, isLoading, error } = useAlgorithmVisualizer(config);

  return (
    <div className="visualization-wrapper">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .visualization-wrapper {
            background-color: var(--color-background, #f8fafc);
            color: var(--color-text, #1e293b);
            min-height: calc(100vh - 80px);
            padding: 2rem 1rem;
            font-family: inherit;
          }

          .visualizer-card {
            max-width: 1200px;
            margin: 0 auto;
            background: var(--color-surface, #ffffff);
            border: 1px solid var(--color-border, #e2e8f0);
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
            padding: 2rem;
          }

          .visualizer-header {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid var(--color-border, #e2e8f0);
            padding-bottom: 1.25rem;
            margin-bottom: 1.5rem;
            gap: 1rem;
          }

          .visualizer-title-area h1 {
            font-size: 1.875rem;
            font-weight: 700;
            color: var(--color-primary-700, #3730a3);
            margin: 0 0 0.25rem 0;
          }

          .visualizer-title-area p {
            color: var(--color-text-muted, #64748b);
            font-size: 0.95rem;
            margin: 0;
          }

          .back-link {
            display: inline-flex;
            align-items: center;
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
            font-weight: 500;
            color: var(--color-primary-600, #4f46e5);
            background: var(--color-primary-50, #eef2ff);
            border-radius: 6px;
            text-decoration: none;
            transition: all 0.2s ease;
          }

          .back-link:hover {
            background: var(--color-primary-100, #e0e7ff);
            color: var(--color-primary-700, #4338ca);
          }

          .visualizer-body {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            position: relative;
          }

          #algoControlSection {
            width: 100%;
            display: flex;
            justify-content: center;
          }

          #AlgorithmSpecificControls {
            border-collapse: separate;
            border-spacing: 0.5rem;
          }

          #AlgorithmSpecificControls input[type="text"] {
            padding: 0.5rem 0.75rem;
            border: 1.5px solid var(--color-border, #cbd5e1);
            border-radius: 6px;
            font-size: 0.95rem;
            outline: none;
            transition: border-color 0.2s;
          }

          #AlgorithmSpecificControls input[type="text"]:focus {
            border-color: var(--color-primary-600, #4f46e5);
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
          }

          #AlgorithmSpecificControls input[type="button"] {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
            font-weight: 600;
            background-color: var(--color-primary-600, #4f46e5);
            color: #ffffff;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: background-color 0.2s, transform 0.1s;
          }

          #AlgorithmSpecificControls input[type="button"]:hover:not(:disabled) {
            background-color: var(--color-primary-700, #4338ca);
          }

          #AlgorithmSpecificControls input[type="button"]:disabled {
            background-color: #cbd5e1;
            color: #94a3b8;
            cursor: not-allowed;
          }

          .canvas-container {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            min-height: 400px;
            background: #ffffff;
            border: 2px solid var(--color-border, #e2e8f0);
            border-radius: 8px;
            overflow: auto;
          }

          #canvas {
            display: block;
            background: #ffffff;
          }

          .loading-overlay {
            position: absolute;
            inset: 0;
            background: rgba(255, 255, 255, 0.85);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 10;
            backdrop-filter: blur(2px);
          }

          .spinner {
            width: 40px;
            height: 40px;
            border: 3px solid #e2e8f0;
            border-top: 3px solid var(--color-primary-600, #4f46e5);
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
            margin-bottom: 0.75rem;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .error-banner {
            padding: 0.75rem 1rem;
            background-color: #fef2f2;
            color: #991b1b;
            border: 1px solid #fecaca;
            border-radius: 6px;
            margin-bottom: 1rem;
            width: 100%;
            text-align: center;
          }

          #generalAnimationControlSection {
            width: 100%;
            display: flex;
            justify-content: center;
            padding-top: 0.5rem;
          }

          #GeneralAnimationControls {
            border-collapse: separate;
            border-spacing: 0.25rem;
          }

          #GeneralAnimationControls input[type="button"] {
            padding: 0.45rem 0.9rem;
            font-size: 0.85rem;
            font-weight: 500;
            background-color: #ffffff;
            color: var(--color-primary-600, #4f46e5);
            border: 1.5px solid var(--color-primary-600, #4f46e5);
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          #GeneralAnimationControls input[type="button"]:hover:not(:disabled) {
            background-color: var(--color-primary-50, #eef2ff);
          }

          #GeneralAnimationControls input[type="button"]:disabled {
            background-color: #f1f5f9;
            color: #94a3b8;
            border-color: #e2e8f0;
            cursor: not-allowed;
          }

          .ui-slider {
            background: #e2e8f0;
            height: 6px;
            border-radius: 3px;
          }

          .ui-slider-handle {
            background: var(--color-primary-600, #4f46e5);
            border-radius: 50%;
            cursor: pointer;
          }
        `,
        }}
      />

      <div className="visualizer-card">
        <header className="visualizer-header">
          <div className="visualizer-title-area">
            <h1>{config.title}</h1>
            <p>
              {config.description ||
                "Step through interactive algorithm operations and visual states."}
            </p>
          </div>
          <Link href="/experiments" className="back-link">
            ← All Experiments
          </Link>
        </header>

        {error && <div className="error-banner">{error}</div>}

        <div className="visualizer-body">
          <div id="algoControlSection">
            <table id="AlgorithmSpecificControls">
              {/* Controls dynamically injected by algorithm script */}
            </table>
          </div>

          <div className="canvas-container">
            {isLoading && (
              <div className="loading-overlay">
                <div className="spinner" />
                <p>Loading visualization engine...</p>
              </div>
            )}
            <canvas
              ref={canvasRef}
              id="canvas"
              width={config.canvasWidth || 800}
              height={config.canvasHeight || 400}
            />
          </div>

          <div id="generalAnimationControlSection">
            <table id="GeneralAnimationControls">
              {/* Animation controls dynamically injected by AnimationMain.js */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
