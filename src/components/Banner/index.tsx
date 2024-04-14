import React from "react";

const Banner = () => {
  const gitHubUrl = process.env.REACT_APP_GITHUB_URL;

  return (
    <>
      <div className="py-2 font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-500 transition-colors">
        拡張機能の利用は、
        <a
          href={gitHubUrl}
          className="text-orange-300 underline hover:text-orange-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        を参照してください
      </div>
    </>
  );
};

export default Banner;
