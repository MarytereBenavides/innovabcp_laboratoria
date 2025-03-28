import React from "react";
import ImageComponent from "@/components/ImageSlider/ImageComponent";
import TextComponent from "@/components/ImageSlider/TextComponent";
import CirclesComponent from "@/components/ImageSlider/CirclesComponent";
import ButtonComponent from "@/components/ImageSlider/buttom";

function MainIncomeSources() {
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

export default MainIncomeSources;