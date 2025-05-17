import { useEffect, useState } from "react";

import "./loading-state.css";

const LoadingState = () => {
  const [animationPhase, setAnimationPhase] = useState(0); // To track the current animation phase

  useEffect(() => {
    // Function to handle the next phase of animation
    const runAnimation = () => {
      if (animationPhase === 0) {
        // Phase 1: Start as a point, then grow horizontally
        document.querySelector(".loading-indicator").style.width = "385px";
        document.querySelector(".loading-indicator").style.height = "8px";
        setTimeout(() => {
          setAnimationPhase(1); // Move to next phase after 2s (horizontal growth)
        }, 1000);
      } else if (animationPhase === 1) {
        // Phase 2: Shrink horizontally back to a point
        document.querySelector(".loading-indicator").style.width = "8px";
        setTimeout(() => {
          setAnimationPhase(2); // Move to next phase after shrinking (2s)
        }, 1000);
      } else if (animationPhase === 2) {
        // Phase 3: Grow vertically from a point
        document.querySelector(".loading-indicator").style.width = "8px";
        document.querySelector(".loading-indicator").style.height = "385px";
        setTimeout(() => {
          setAnimationPhase(3); // Move to next phase after vertical growth (2s)
        }, 1000);
      } else if (animationPhase === 3) {
        // Phase 4: Shrink vertically back to a point
        document.querySelector(".loading-indicator").style.height = "8px";
        setTimeout(() => {
          setAnimationPhase(0); // Reset to horizontal growth after shrinking (2s)
        }, 1000);
      }
    };

    // Initialize the element as a small point (8x8px)
    const indicator = document.querySelector(".loading-indicator");
    if (indicator) {
      indicator.style.width = "8px";
      indicator.style.height = "8px";
    }

    // Start the animation immediately
    runAnimation();

    // Set interval to handle each phase
    const interval = setInterval(runAnimation, 1000); // 2 seconds between phases for a smoother cycle

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [animationPhase]);

  return (
    <div className="loading-state--container cursor-default">
      <div className="loading-indicator" />
    </div>
  );
};

export default LoadingState;
