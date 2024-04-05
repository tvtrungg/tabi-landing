import { Card, Carousel } from "antd";
import "./Destinations.css";
import { SETTINGS_CAROUSEL } from "@/constants/carousel";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { DESTINATIONS } from "@/data/destinations";
import SynthesisEffect from "../../AnimationEffect/SynthesisEffect";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import CustomCarousel from "../../CustomCarousel";

const Destinations = () => {
  const t = useTranslations("container");

  return (
    <div className="destination-frame">
      <div className="h-full py-16 xs:max-w-screen-xs 2xs:max-w-screen-2xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto ">
        <SynthesisEffect animationType="scale">
          <div className="destination-title text-center mb-16">
            <h3 className="text-xl font-medium">{t("destinations.subTitle")}</h3>
            <h1 className="mt-2 capitalize">{t("destinations.title")}</h1>
          </div>
          <CustomCarousel array={DESTINATIONS} />
        </SynthesisEffect>
      </div>
    </div>
  );
};

export default Destinations;
