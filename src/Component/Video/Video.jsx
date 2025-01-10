import React from "react";
import "./Video.css"; // Optional CSS for styling

function Video() {
  return (
    <div className="MakeFood">
      <h1>How to Make Food</h1>
      <div className="Main-container">
        <div className="iframe-container">
          <iframe
            src="https://www.youtube.com/embed/_CTkh6jIp10?si=QRE7dC0PjqRzDVQi" // Embed format URL
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="iframe-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/419LG8O3ljc?si=smD_1TlrYCBIz5Bg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="iframe-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/EE5P1w0z1Nw?si=MODx4On_tlh8i6qM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  );
}

export default Video;
