import React from "react";

const VideoIntro = () => {
  return (
    <div className="bg-white dark:bg-slate-800 dark:border-purple-950/25 shadow-md border rounded p-5">
      <h2 className="text-xl font-bold uppercase font-orbitron tracking-wider">
        My JOURNEY
      </h2>
      <div className="mt-3 sm:mt-4">
        <iframe
          width="100%"
          height="225"
          className="rounded"
          src="https://www.youtube.com/embed/gmIP1sXM1Wc?si=r-_lSO2fDD5H8BSZ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoIntro;
