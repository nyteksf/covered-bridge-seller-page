import { useState, useEffect } from "react";
import VideoSkeleton from "../../videoSkeleton";

const YouTubeEmbed = ({ url, onLoad, className = "" }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    // Get video ID when component mounts or URL changes
    const id = getYouTubeID(url);
    setVideoId(id);

    // Reset loading state when URL changes
    setIsLoading(true);
  }, [url]);

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

  if (!videoId) return null;

  return (
    <div className={`relative aspect-video w-full ${className}`}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
        style={{ opacity: isLoading ? 0 : 1 }}
        loading="lazy"
        onLoad={onLoad}
      />
    </div>
  );
};

export default YouTubeEmbed;
