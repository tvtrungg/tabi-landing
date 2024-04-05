import { Col, Row } from "antd";
import IntroFeature from "../IntroFeature";
import "../Features.css";
import SynthesisEffect from "@/app/components/AnimationEffect/SynthesisEffect";
import { useTranslations } from "next-intl";
import { FEATURES } from "@/data/features";

type TFeatureOneProps = {
  children?: React.ReactNode;
};

type TFeatureItemProps = {
  bgClassName: string;
  number: string;
  itemText: string;
};

function FeatureOne({ children }: TFeatureOneProps) {
  const t = useTranslations("container");

  const FeatureItem = ({
    bgClassName,
    number,
    itemText,
  }: TFeatureItemProps) => (
    <Col
      span={5}
      className={`flex flex-col justify-end items-center rounded-lg ${bgClassName}`}
    >
      <h2 className="font-medium text-lg">
        {t("features.feature_1.content.over")} <span>{number}</span>{" "}
        {t(itemText)}
      </h2>
    </Col>
  );

  return (
    <div>
      <IntroFeature
        id={1}
        translation="feature_1.title"
        bgImage={FEATURES[0].image}
      />
      {children}
      <SynthesisEffect animationType="fade" direction="up">
        <Row className="gap-10 justify-center max-w-screen-xl mx-auto my-16">
          <FeatureItem
            bgClassName="bg-hotel"
            number="245"
            itemText="features.feature_1.content.item1"
          />
          <FeatureItem
            bgClassName="bg-world"
            number="4,100"
            itemText="features.feature_1.content.item2"
          />
          <FeatureItem
            bgClassName="bg-connect"
            number="100"
            itemText="features.feature_1.content.item3"
          />
          <FeatureItem
            bgClassName="bg-community"
            number="68,000"
            itemText="features.feature_1.content.item4"
          />
        </Row>
      </SynthesisEffect>
    </div>
  );
}

export default FeatureOne;
