import React from "react";
import PropTypes from "prop-types";

interface IYoutubeEmbedProps {
  embedId: string;
}

const YoutubeEmbed: React.FC<IYoutubeEmbedProps> = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      className="object-cover w-full h-56"
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
