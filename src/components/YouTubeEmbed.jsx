import { useState, useEffect } from "react";
import YouTubeSkeleton from "./YouTubeSkeleton";

const YouTubeEmbed = ({ url, className = "", onReady }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Reset loading state when URL changes
    setIsLoading(true);
  }, [url]);

  const onLoad = () => {
    setIsLoading(false);
    if (onReady) onReady();
  };

  const getYouTubeID = (url) => {
    try {
      const parsed = new URL(url);
      if (parsed.hostname === "youtu.be") return parsed.pathname.slice(1);
      if (parsed.hostname.includes("youtube.com"))
        return parsed.searchParams.get("v");
      return null;
    } catch {
      return null;
    }
  };

  const videoId = getYouTubeID(url);
  if (!videoId) return null;

  return (
    <div
      className={`relative w-full aspect-video rounded-lg overflow-hidden ring-1 ring-black/10 ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80">
          <YouTubeSkeleton />
        </div>
      )}
      <iframe
        className={`absolute inset-0 w-full h-full ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={onLoad}
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
