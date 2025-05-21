import { useEffect, useRef } from "react";

interface YouTubePlayerProps {
  videoId: string;
  autoPlay?: boolean;
}

export function YouTubePlayer({ videoId, autoPlay = true }: YouTubePlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // When the videoId changes, reload the iframe with the new video
    if (iframeRef.current) {
      iframeRef.current.src = `https://www.youtube.com/embed/${videoId}?autoplay=${autoPlay ? '1' : '0'}&rel=0`;
    }
  }, [videoId, autoPlay]);

  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg">
      <iframe
        ref={iframeRef}
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=${autoPlay ? '1' : '0'}&rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
} 