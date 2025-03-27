import React from "react";
import ImageComponent from "./ImageComponent";
import TextComponent from "./TextComponent";
import CirclesComponent from "./CirclesComponent";
import ButtonComponent from "./buttom";
import Image from "next/image";


function ImageSlider() {
  return (
    <div className="flex flex-col items-center p-4 h-screen">
      <div className="p-4 border border-gray-200 h-full">
      <ImageComponent src="/phone.jpg" alt="Slider Image" width="80" height="80" className="mb-4" />
      </div>
      <div className="absolute bottom-10 w-full p-4">
        <div className="w-80 text-center mx-auto">
          <ButtonComponent />
          <TextComponent>Aprende a manejar tu dinero jugando y gana puntos</TextComponent>
          <CirclesComponent />
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;