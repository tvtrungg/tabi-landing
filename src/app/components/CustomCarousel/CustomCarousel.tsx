"use client";
import { SETTINGS_CAROUSEL } from "@/constants/carousel";
import { Card, Carousel } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

type CustomCarouselProps = {
  array: any[];
};

function CustomCarousel({ array }: CustomCarouselProps) {
  const [slidesToShow, setSlidesToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize(); // Gọi để thiết lập giá trị ban đầu
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Carousel
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToShow}
      {...SETTINGS_CAROUSEL}
      className="z-10 carousel-custom pb-10"
    >
      {array.map((item, index) => {
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
  );
}

export default CustomCarousel;
