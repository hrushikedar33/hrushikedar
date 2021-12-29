import React from "react";
import userData from "../helper/data";

function Certificates() {
  const { certificates } = userData;
  return (
    <div className="section">
      <h1>Certificate</h1>
      {/* className="start-heading" */}
      <hr />
      <div className="mt-8 flex justify-center">
        {/*  <Loading v-if="$fetchState.pending" :size="50" class="mt-2" /> */}
        <div className="grid-layout w-full">
          {certificates.map((x, i) => (
            <a
              href={x.certificateUrl}
              key={i}
              className="project-card rounded-lg grow h-28 md:h-40 border-4"
              style={{
                backgroundImage: `linear-gradient(
                  180deg,
                  rgba(44, 44, 44, 0.6) 38%,
                  rgba(22, 22, 22, 0.9) 100%
                ),
                url(${x.imageUrl})`,
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4 className="h-20 md:h-32 flex flex-col justify-end items-center text-center text-white">
                {x.name}
              </h4>
            </a>
          ))}
          <a
            href="https://drive.google.com/drive/folders/1Yo80FfSWfaVUYqQVkBtnP0DWXSuNXW57?usp=sharing"
            className="card-img bg-primary text-white grow flex justify-center items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="text-center">All...</h1>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
