import { Card, Carousel } from "antd";
import "./Destinations.css";
import { SETTINGS_CAROUSEL } from "@/constants/carousel";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { DESTINATIONS } from "@/data/destinations";
import SynthesisEffect from "../../AnimationEffect/SynthesisEffect";
import { useTranslations } from "next-intl";

const Destinations = () => {
  const t = useTranslations("container");
  return (
    <div className="destination-frame h-full max-w-screen-xl mx-auto py-16">
      <SynthesisEffect animationType="scale">
        <div className="destination-title text-center mb-16">
          <h3 className="text-xl font-medium">{t('destinations.subTitle')}</h3>
          <h1 className="mt-2 capitalize">{t('destinations.title')}</h1>
        </div>
        <Carousel {...SETTINGS_CAROUSEL} className="z-10 carousel-custom pb-10">
          {DESTINATIONS.map((item, index) => {
            return (
              <Card
                key={index}
                className="card-custom overflow-hidden h-[400px]"
                cover={
                  <div className="overflow-hidden h-full relative">
                    <Image
                      src={item.cdn}
                      fill
                      className="object-cover"
                      alt={item.title}
                    />
                  </div>
                }
              >
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg">{item.title}</h3>
                    <span className="text-base">{item.price}</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FaLocationArrow />
                    <p className="text-base">{item.time}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </Carousel>
      </SynthesisEffect>
    </div>
  );
};

export default Destinations;
