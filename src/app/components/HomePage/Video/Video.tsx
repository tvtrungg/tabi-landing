"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type TVideoProps = {
  srcVideo: string;
  poster: string;
  className?: string;
  overlay?: boolean;
  srcImg: string | StaticImport;
};

function Video({ srcVideo, poster, className, overlay, srcImg }: TVideoProps) {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    setVideoEnded(true);
  };

  const handleVideoPlay = () => {
    setVideoEnded(false);
  };
  return (
    <>
      <video
        autoPlay
        muted
        poster={poster}
        playsInline
        className={`absolute top-0 left-0 right-0 h-full w-full object-cover -z-10 ${className} ${
          videoEnded ? "hidden" : ""
        }`}
        onEndedCapture={handleVideoEnded}
        onPlay={handleVideoPlay}
        ref={videoRef}
      >
        <source src={srcVideo} type="video/mp4" />
        <track kind="captions" />
      </video>
      {videoEnded && (
        <Image
          src={srcImg}
          fill
          alt="Santorini Heights"
          className="-z-10 object-cover"
        />
      )}
      {overlay && (
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000014]"></div>
      )}
    </>
  );
}

export default Video;
