import { Button, Col, Row } from "antd";
import Image from "next/image";
import "./Romantic.css";
import SynthesisEffect from "../../AnimationEffect/SynthesisEffect";
import { useTranslations } from "next-intl";

function Romantic() {
  const t = useTranslations("container");
  return (
    <div className="bg-bling relative">
      <div
        className="h-full py-16 relative xs:max-w-screen-xs 2xs:max-w-screen-2xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto z-2"
        id="romantic"
      >
        <div className="bg-bling"></div>
        <SynthesisEffect animationType="fade" direction="left">
          <Row className="justify-between">
            <Col span={12}>
              <div className="h-[600px] text-center flex justify-center items-center relative">
                <div className="ro-img-1 relative h-full w-full">
                  <Image
                    src="/romantic/romantic-1.jpg"
                    alt="Romanic Background"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ro-img-2 relative h-full w-full">
                  <Image
                    src="/romantic/romantic-2.jpg"
                    alt="Romanic Background"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ro-img-3 relative h-full w-full">
                  <Image
                    src="/romantic/romantic-3.jpg"
                    alt="Romanic Background"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ro-img-4 relative">
                  <Image
                    src="/romantic/romantic-4.jpg"
                    alt="Romanic Background"
                    fill
                    className="object-cover romantic-2"
                  />
                </div>
              </div>
            </Col>
            <Col span={11} className="mt-10 ">
              <div className="tracking-wider">
                <h3 className="text-primary-dominant uppercase text-lg">
                  {t("romantic.subTitle")}
                </h3>
                <h1 className="text-5xl font-semibold my-4">
                  {t("romantic.title")}
                </h1>
                <p className="text-dark leading-6 text-base">
                  {t("romantic.description")}
                </p>
              </div>
              <Button
                type="primary"
                className="mt-10 py-3 px-10 h-auto uppercase text-base"
              >
                {t("bookNow")}
              </Button>
            </Col>
          </Row>
        </SynthesisEffect>
      </div>
    </div>
  );
}

export default Romantic;
