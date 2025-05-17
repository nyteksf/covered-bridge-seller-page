import React from "react";

const VideoSkeleton = () => (
  <>
    <style>
      {`
        @keyframes shine {
          0%   { background-position: -150% 0; }
          100% { background-position: 150% 0; }
        }
      `}
    </style>
    <div className="relative w-full overflow-hidden rounded-md bg-[#232829] shadow-lg">
      {/* Maintain 16:9 aspect ratio */}
      <div className="pb-[56.25%]"></div>

      {/* Diagonal shimmer - using inline style for animation */}
      <div 
        className="absolute inset-0" 
        style={{
          background: "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.12) 40%, transparent 60%)",
          backgroundSize: "250% 100%",
          animation: "shine 1.8s linear infinite"
        }}
      />

      {/* Ghost play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-14 w-14 rounded-full border-2 border-white/25 flex items-center justify-center">
          <div className="ml-0.5 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white/30" />
        </div>
      </div>

      {/* Optional branded bottom bar */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-teal-700"></div>
    </div>
  </>
);

export default VideoSkeleton;