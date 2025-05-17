const YouTubeSkeleton = () => (
  <>
    <style>{`
      @keyframes shine {
        0%   { background-position: -150% 0; }
        100% { background-position: 150% 0; }
      }
    `}</style>

    <div className="relative w-full pb-[56.25%] overflow-hidden rounded-md bg-[#232829]">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.08)_20%,rgba(255,255,255,0.12)_40%,transparent_60%)] bg-[length:250%_100%] animate-[shine_1.8s_linear_infinite]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[4.5rem] h-[3rem] bg-[#ff00331b] rounded-[20%/50%] flex items-center justify-center shadow-lg">
          <div className="ml-[2px] h-0 w-0 border-y-[10px] opacity-85 border-l-[16px] border-y-transparent border-l-[#f5f5f5]" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-[4px] w-full bg-[#007e7e]" />
    </div>
  </>
);

export default YouTubeSkeleton;
