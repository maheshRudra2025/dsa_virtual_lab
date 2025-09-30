'use client';

import { useEffect, useRef } from 'react';

export default function StackExperiment() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scriptsLoadedRef = useRef(false);

  useEffect(() => {
    // Prevent multiple script loading
    if (scriptsLoadedRef.current) return;
    
    // Load scripts dynamically in the correct order
    const loadScripts = async () => {
      // Helper function to load a script
      const loadScript = (src: string): Promise<void> => {
        return new Promise((resolve, reject) => {
          // Check if script is already loaded
          const existingScript = document.querySelector(`script[src="${src}"]`);
          if (existingScript) {
            resolve();
            return;
          }

          const script = document.createElement('script');
          script.src = src;
          script.type = 'text/javascript';
          script.onload = () => {
            console.log(`Loaded: ${src}`);
            resolve();
          };
          script.onerror = () => reject(new Error(`Failed to load ${src}`));
          document.head.appendChild(script);
        });
      };

      // Helper function to load CSS
      const loadCSS = (href: string) => {
        const existingLink = document.querySelector(`link[href="${href}"]`);
        if (existingLink) return;
        
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      };

      try {
        console.log('Starting to load scripts...');
        
        // Load CSS files
        loadCSS('/lib/third-party/jquery-ui-1.8.11.custom.css');

        // Load scripts in order
        await loadScript('/lib/third-party/jquery-1.5.2.min.js');
        await loadScript('/lib/third-party/jquery-ui-1.8.11.custom.min.js');
        
        // Load animation framework
        await loadScript('/lib/animations/CustomEvents.js');
        await loadScript('/lib/animations/UndoFunctions.js');
        await loadScript('/lib/animations/AnimatedObject.js');
        await loadScript('/lib/animations/AnimatedLabel.js');
        await loadScript('/lib/animations/AnimatedCircle.js');
        await loadScript('/lib/animations/AnimatedRectangle.js');
        await loadScript('/lib/animations/AnimatedLinkedList.js');
        await loadScript('/lib/animations/HighlightCircle.js');
        await loadScript('/lib/animations/Line.js');
        await loadScript('/lib/animations/ObjectManager.js');
        await loadScript('/lib/animations/AnimationMain.js');
        
        // Load algorithm files
        await loadScript('/lib/algorithms/Algorithm.js');
        await loadScript('/lib/algorithms/StackLL.js');
        
        console.log('All scripts loaded successfully');
        scriptsLoadedRef.current = true;
        
        // Wait a bit for DOM to be fully ready
        setTimeout(() => {
          initializeVisualization();
        }, 100);
        
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    const initializeVisualization = () => {
      try {
        console.log('Attempting to initialize visualization...');
        
        // Check if canvas element exists
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        if (!canvas) {
          console.error('Canvas element not found');
          return;
        }
        
        // Set global canvas reference (required by the animation system)
        (window as any).canvas = canvas;
        
        // Check if required classes exist
        if (typeof (window as any).StackLL !== 'function') {
          console.error('StackLL constructor not found');
          return;
        }
        
        // The AnimationMain.js file has initCanvas function that creates all buttons
        // Let's call the existing init function which should use the real initCanvas
        if (typeof (window as any).init === 'function') {
          console.log('Calling existing init function...');
          (window as any).init();
          
          // After calling init(), set up proper event listeners and button management
          setTimeout(() => {
            setupAnimationControls();
          }, 500);
          
          console.log('Visualization initialized successfully via init()');
          return;
        }
        
        console.log('Init function not found, trying manual initialization');
        
      } catch (error) {
        console.error('Error initializing visualization:', error);
        console.log('Stack trace:', error);
      }
    };

    const setupAnimationControls = () => {
      const animationManager = (window as any).animationManager;
      if (!animationManager) {
        console.error('Animation manager not found');
        return;
      }

      console.log('Setting up animation controls...');
      console.log('Animation manager methods:', Object.getOwnPropertyNames(animationManager));

      // Set up the animation event handlers using the original pattern
      // The original system expects these global functions to exist
      (window as any).animUndoUnavailable = function() {
        console.log('animUndoUnavailable called');
        const stepBackButton = (window as any).stepBackButton;
        const skipBackButton = (window as any).skipBackButton;
        if (stepBackButton) stepBackButton.disabled = true;
        if (skipBackButton) skipBackButton.disabled = true;
      };

      (window as any).animWaiting = function() {
        console.log('animWaiting called');
        const stepForwardButton = (window as any).stepForwardButton;
        const skipForwardButton = (window as any).skipForwardButton;
        const playPauseButton = (window as any).playPauseBackButton;
        const stepBackButton = (window as any).stepBackButton;
        const skipBackButton = (window as any).skipBackButton;
        
        if (stepForwardButton) stepForwardButton.disabled = false;
        if (skipForwardButton) skipForwardButton.disabled = false;
        if (playPauseButton) {
          playPauseButton.disabled = false;
          playPauseButton.value = 'Play';
        }
        // Enable undo buttons if undo stack is available
        if (animationManager && animationManager.undoStack && animationManager.undoStack.length > 0) {
          if (stepBackButton) stepBackButton.disabled = false;
          if (skipBackButton) skipBackButton.disabled = false;
        }
      };

      (window as any).animStarted = function() {
        console.log('animStarted called');
        const stepForwardButton = (window as any).stepForwardButton;
        const skipForwardButton = (window as any).skipForwardButton;
        const playPauseButton = (window as any).playPauseBackButton;
        
        if (stepForwardButton) stepForwardButton.disabled = true;
        if (skipForwardButton) skipForwardButton.disabled = false;
        if (playPauseButton) {
          playPauseButton.disabled = false;
          playPauseButton.value = 'Pause';
        }
      };

      (window as any).animEnded = function() {
        console.log('animEnded called');
        const stepForwardButton = (window as any).stepForwardButton;
        const skipForwardButton = (window as any).skipForwardButton;
        const playPauseButton = (window as any).playPauseBackButton;
        const stepBackButton = (window as any).stepBackButton;
        const skipBackButton = (window as any).skipBackButton;
        
        if (stepForwardButton) stepForwardButton.disabled = true;
        if (skipForwardButton) skipForwardButton.disabled = true;
        if (playPauseButton) playPauseButton.disabled = true;
        
        // Keep undo buttons enabled if undo is available
        if (animationManager && animationManager.undoStack && animationManager.undoStack.length > 0) {
          if (stepBackButton) stepBackButton.disabled = false;
          if (skipBackButton) skipBackButton.disabled = false;
        }
      };

      // Set up event listeners using the custom event system
      if (typeof animationManager.addListener === 'function') {
        // Remove any existing listeners first
        try {
          animationManager.removeListener('AnimationStarted', window, (window as any).animStarted);
          animationManager.removeListener('AnimationEnded', window, (window as any).animEnded);
          animationManager.removeListener('AnimationWaiting', window, (window as any).animWaiting);
          animationManager.removeListener('AnimationUndoUnavailable', window, (window as any).animUndoUnavailable);
        } catch (e) {
          // Ignore errors if listeners don't exist
        }

        // Add the listeners
        animationManager.addListener('AnimationStarted', window, (window as any).animStarted);
        animationManager.addListener('AnimationEnded', window, (window as any).animEnded);
        animationManager.addListener('AnimationWaiting', window, (window as any).animWaiting);
        animationManager.addListener('AnimationUndoUnavailable', window, (window as any).animUndoUnavailable);
        
        console.log('Animation event listeners added successfully');
      }

      // Initial button state - disable all animation controls initially
      setTimeout(() => {
        console.log('Setting initial button states...');
        const buttons = [
          (window as any).stepBackButton,
          (window as any).stepForwardButton,
          (window as any).skipBackButton,
          (window as any).skipForwardButton,
          (window as any).playPauseBackButton
        ];

        buttons.forEach(button => {
          if (button) {
            button.disabled = true;
            console.log(`Disabled button: ${button.value}`);
          }
        });
      }, 300);
    };

    loadScripts();

    // Cleanup function
    return () => {
      // Clean up if needed
      if ((window as any).currentAlg) {
        try {
          (window as any).currentAlg = null;
        } catch (e) {
          console.log('Cleanup completed');
        }
      }
      
      // Clear any running timers
      if ((window as any).timer) {
        clearTimeout((window as any).timer);
        (window as any).timer = null;
      }
      
      // Clean up global functions
      if ((window as any).animationManager) {
        (window as any).animationManager = null;
      }
      if ((window as any).objectManager) {
        (window as any).objectManager = null;
      }
    };
  }, []);

  return (
    <div className="visualization-container">
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap");
          
          .visualization-container {
            background-color: #f0f5f0;
            color: #333;
            font-family: "Poppins", sans-serif;
            min-height: 100vh;
          }
          
          #container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }
          
          #header {
            text-align: center;
            margin-bottom: 20px;
          }
          
          #header h1 {
            color: #333;
            font-family: "Poppins", sans-serif;
            margin: 0;
            background-color: transparent;
          }
          
          #mainContent {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }
          
          #algoControlSection {
            background-color: transparent;
          }
          
          #AlgorithmSpecificControls {
            background-color: transparent;
            margin-bottom: 20px;
          }
          
          #AlgorithmSpecificControls td {
            padding: 5px;
            background-color: transparent;
          }
          
          #AlgorithmSpecificControls input[type="text"] {
            padding: 8px;
            border: 2px solid #60b389;
            border-radius: 4px;
            background-color: white;
            color: #333;
            font-family: "Poppins", sans-serif;
          }
          
          #AlgorithmSpecificControls input[type="button"] {
            padding: 8px 16px;
            border: 2px solid #60b389;
            border-radius: 4px;
            background-color: #60b389;
            color: white;
            font-family: "Poppins", sans-serif;
            cursor: pointer;
            margin-left: 5px;
            transition: all 0.2s ease;
          }
          
          #AlgorithmSpecificControls input[type="button"]:hover:not(:disabled) {
            background-color: #4a8c6a;
            transform: translateY(-1px);
          }
          
          #AlgorithmSpecificControls input[type="button"]:disabled {
            background-color: rgb(150, 150, 150);
            color: rgb(200, 200, 200);
            border-color: rgb(120, 120, 120);
            cursor: not-allowed;
            opacity: 0.6;
          }
          
          #canvas {
            background-color: transparent;
            border: 2px solid #60b389;
            border-radius: 8px;
            margin: 20px 0;
          }
          
          #generalAnimationControlSection {
            background-color: transparent;
          }
          
          #GeneralAnimationControls {
            background-color: transparent;
            width: auto;
            margin: 0 auto;
            border-collapse: collapse;
            display: inline-table;
          }
          
          #GeneralAnimationControls td {
            padding: 5px;
            background-color: transparent;
          }
          
          #GeneralAnimationControls input[type="button"] {
            padding: 8px 16px;
            border: 2px solid #60b389;
            border-radius: 4px;
            background-color: white;
            color: #60b389;
            font-family: "Poppins", sans-serif;
            cursor: pointer;
            margin: 2px;
            transition: all 0.2s ease;
          }
          
          #GeneralAnimationControls input[type="button"]:hover:not(:disabled) {
            background-color: #e0f0e0;
            transform: translateY(-1px);
          }
          
          #GeneralAnimationControls input[type="button"]:disabled {
            background-color: rgb(230, 230, 230);
            color: rgb(150, 150, 150);
            border-color: rgb(180, 180, 180);
            cursor: not-allowed;
            opacity: 0.6;
          }
          
          .ui-slider {
            background-color: #e0f0e0;
          }
          
          .ui-slider-handle {
            background-color: #60b389;
          }
        `
      }} />
      
      {/* Main visualization container */}
      <div id="container">
        <div id="header">  
          <h1>Stack</h1>
        </div>
        
        <div id="mainContent"> 
          <div id="algoControlSection">
            {/* Table for buttons to control specific animation (insert/find/etc) */}
            {/* (filled in by javascript code specific to the animation) */}
            <table id="AlgorithmSpecificControls"> 
              {/* Controls will be populated by JavaScript */}
            </table> 
          </div>
          
          {/* Drawing canvas where all animation is done */}
          <canvas ref={canvasRef} id="canvas" width="800" height="400"></canvas>
          
          <div id="generalAnimationControlSection">
            {/* Table for buttons to control general animation (play/pause/undo/etc) */}
            {/* (filled in by javascript code, specifically AnimationMain.js) */}
            <table id="GeneralAnimationControls"> 
              {/* Controls will be populated by JavaScript */}
            </table>		
          </div>
        </div>
      </div>
    </div>
  );
}
