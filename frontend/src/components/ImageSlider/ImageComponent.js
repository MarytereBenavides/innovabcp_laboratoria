import React from "react";

const useImageComponent = (props) => {
  const { src, alt, width, height, className } = props;

  return (
    <div className={`w-${width} h-${height} ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

function ImageComponent(props) {
  return useImageComponent(props);
}

export default ImageComponent;