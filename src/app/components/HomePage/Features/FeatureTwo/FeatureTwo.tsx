import { useTranslations } from "next-intl";
import { Row, Col, Rate } from "antd";
import Image from "next/image";
import { FEATURES, HOTELS, RESTAURANTS } from "@/data/features";
import SynthesisEffect from "@/app/components/AnimationEffect/SynthesisEffect";
import AppearsGradually from "@/app/components/AnimationEffect/AppearsGradually";
import IntroFeature from "../IntroFeature";

type TFeatureTwo = {
  children?: React.ReactNode;
};

function FeatureTwo({ children }: TFeatureTwo) {
  const t = useTranslations("container");

  const renderFeatureItems = (items: any) =>
    items.map((item: any) => (
      <Col key={item.id} span={6} className="item-container animate-container">
        <div className="image-animation-1 overflow-hidden shadow-md cursor-pointer rounded-xl relative w-full overplay-bg min-h-[230px] text-white">
          <Image
            className="object-cover"
            src={item.image}
            alt={"features"}
            fill
            sizes="(max-width: 768px) w-full"
          />
          <div className="absolute bottom-0 left-0 p-3 z-[3]">
            <Rate
              disabled
              allowHalf
              defaultValue={item.rating}
              className="text-base"
            />
            <h4 className="text-lg font-normal mt-1">{item.name}</h4>
          </div>
          <span className="absolute top-4 right-4 bg-primary-dominant p-2 rounded-md z-[3] font-semibold">
            {item.score}
          </span>
        </div>
      </Col>
    ));

  return (
    <div>
      <IntroFeature
        id={2}
        translation="feature_2.title"
        bgImage={FEATURES[1].image}
      />
      <div className="max-w-screen-xl h-full mx-auto py-16">
        {children}
        <AppearsGradually direction="left">
          <Row gutter={32}>{renderFeatureItems(HOTELS)}</Row>
        </AppearsGradually>

        <SynthesisEffect animationType="fade" direction="up">
          <div className="feature-title text-center my-16">
            <h3 className="font-medium">
              {t("features.feature_2.subTitle_2")}
            </h3>
            <h1 className="mt-2 capitalize">
              {t("features.feature_2.description_2")}
            </h1>
          </div>
        </SynthesisEffect>
        <AppearsGradually>
          <Row gutter={32}>{renderFeatureItems(RESTAURANTS)}</Row>
        </AppearsGradually>
      </div>
    </div>
  );
}

export default FeatureTwo;
