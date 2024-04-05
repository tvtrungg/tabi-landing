import { Card, Col, Row } from "antd";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaArrowCircleDown } from "react-icons/fa";
import { FEATURES } from "@/data/features";
import SynthesisEffect from "@/app/components/AnimationEffect/SynthesisEffect";
import FeatureOne from "./FeatureOne";
import FeatureTwo from "./FeatureTwo";
import FeatureThree from "./FeatureThree";
import "./Features.css";

function Features() {
  const t = useTranslations("container");

  return (
    <>
      <div className="feature-container max-w-screen-xl h-full mx-auto pb-16">
        <SynthesisEffect animationType="fade" direction="right">
          <div className="feature-title text-center mb-16">
            <h3 className="text-xl font-medium">{t("features.subTitle")}</h3>
            <h1 className="mt-2 capitalize">{t("features.title")}</h1>
          </div>
          <Row className="items-center justify-center gap-10">
            {FEATURES.map((feature) => (
              <Col key={feature.id} span={6} className="cursor-pointer">
                <a href={`#feature-${feature.id}`}>
                  <Card
                    className="card-custom overflow-hidden h-[320px] shadow-md"
                    cover={
                      <div className="overflow-hidden h-full relative overplay-bg ">
                        <Image
                          src={feature.image}
                          fill
                          className="object-cover"
                          alt={`Feature ${feature.id}}`}
                        />
                        <div className="h-full flex justify-center items-center">
                          <span className="feature-text text-7xl text-white">
                            0{feature.id}
                          </span>
                        </div>
                      </div>
                    }
                  >
                    <div className="flex flex-col gap-2">
                      <h3 className="font-medium text-lg">
                        {t(feature.title)}
                      </h3>
                      <FaArrowCircleDown className="down-arrow w-full text-center text-2xl" />
                    </div>
                  </Card>
                </a>
              </Col>
            ))}
          </Row>
        </SynthesisEffect>
      </div>
      <FeatureOne>
        <SynthesisEffect animationType="fade" direction="up">
          <div className="feature-one-title max-w-screen-xl mx-auto my-16 flex justify-center">
            <h3 className="w-1/2 font-normal text-lg text-center tracking-wide leading-8">
              {t("features.feature_1.description")}
            </h3>
          </div>
        </SynthesisEffect>
      </FeatureOne>
      <FeatureTwo>
        <SynthesisEffect animationType="fade" direction="up">
          <div className="feature-title text-center mb-16">
            <h3 className="text-xl font-medium">
              {t("features.feature_2.subTitle_1")}
            </h3>
            <h1 className="mt-2 capitalize">
              {t("features.feature_2.description_1")}
            </h1>
          </div>
        </SynthesisEffect>
      </FeatureTwo>
      <FeatureThree />
    </>
  );
}

export default Features;
