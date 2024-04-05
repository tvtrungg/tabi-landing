"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import SynthesisEffect from "@/app/components/AnimationEffect/SynthesisEffect";

type IntroFeatureProps = {
  id: number;
  translation: string;
  bgImage: string;
};

function IntroFeature({ id, translation, bgImage }: IntroFeatureProps) {
  const t = useTranslations("container");
  const [isInView, setIsInView] = useState(false);

  return (
    <div className="relative w-full h-screen pb-16 -z-10" id={`feature-${id}`}>
      <div
        className={`w-full h-full absolute top-0 left-0 shrink-animation overplay-bg -z-10 ${
          isInView ? "cover-animation" : ""
        }`}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        }}
      />

      <SynthesisEffect animationType="fade" setIsInView={setIsInView}>
        <div className="h-full flex flex-col items-center gap-32">
          <div className="feature-title text-center mt-16">
            <h2 className="font-medium mb-2 text-white mt-14">
              {t("features.feature")}
            </h2>
            <span className="feature-text text-8xl font-semibold">0{id}</span>
          </div>
          <h4 className="text-6xl text-center w-1/2 mx-auto text-white">
            {t(`features.${translation}`)}
          </h4>
        </div>
      </SynthesisEffect>
    </div>
  );
}

export default IntroFeature;
