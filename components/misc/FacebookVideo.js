import React from "react";

export const FacebookVideo = ({ video }) => {
  if (!video) return null;

  const { label, iframe } = video;

  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <div className="relative overflow-hidden max-w-full pb-[56.25%] h-0">
        <iframe
          title={label || "Facebook Video"}
          src={iframe}
          width="560"
          height="315"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowtransparency="true"
          allowFullScreen={true}
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>

      {label && (
        <h4 className="font-bold text-lg mt-4" as="h4">
          {label}
        </h4>
      )}
    </div>
  );
};
