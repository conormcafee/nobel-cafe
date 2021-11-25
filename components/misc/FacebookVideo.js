import React, { Fragment } from "react";

export const FacebookVideo = ({ video }) => {
  if (!video) return null;

  const { label, iframe } = video;

  return (
    <Fragment>
      {label && <h4 as="h4">{label}</h4>}
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
    </Fragment>
  );
};
