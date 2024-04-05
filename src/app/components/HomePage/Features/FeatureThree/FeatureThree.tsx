import { useTranslations } from "next-intl";
import { Row, Col, Rate, Card, Progress } from "antd";
import Image from "next/image";
import { FEATURES, HOTELS, RESTAURANTS } from "@/data/features";
import SynthesisEffect from "@/app/components/AnimationEffect/SynthesisEffect";
import IntroFeature from "../IntroFeature";
import "./FeatureThree.css";
import { FaLeaf } from "react-icons/fa";
import { FaMap } from "react-icons/fa6";
import { IoPaperPlane, IoAirplaneOutline } from "react-icons/io5";
import { TbCurrentLocation } from "react-icons/tb";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlinePayment } from "react-icons/md";
import colors from "../../../../../../config/colors";
function FeatureThree() {
  const t = useTranslations("container");

  return (
    <div>
      <IntroFeature
        id={3}
        translation="feature_3.title"
        bgImage={FEATURES[2].image}
      />
      <div className="booking-container max-w-screen-xl h-full mx-auto py-16">
        <Row className="gap-24 items-center">
          <Col span={10}>
            <SynthesisEffect animationType="fade" direction="left">
              <div>
                <h3 className="text-primary-dominant text-xl font-semibold mb-2">
                  {t("booking.subTitle")}
                </h3>
                <h1 className="text-4xl font-bold mb-8">
                  {t("booking.title")}
                </h1>
                <div className="flex gap-5 items-center mb-10">
                  <div className={`p-4 rounded-lg bg-[#f25f5c]`}>
                    <TbCurrentLocation className="text-2xl" />
                  </div>
                  <div className="w-[75%] leading-5">
                    <h3 className="font-semibold text-lg">
                      {t("booking.step1.title")}
                    </h3>
                    <p className="text-base text-dark">
                      {t("booking.step1.description")}
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 items-center mb-10">
                  <div className="p-4 rounded-lg bg-[#ffe066]">
                    <MdOutlinePayment className="text-2xl" />
                  </div>
                  <div className="w-[75%] leading-5">
                    <h3 className="font-semibold text-lg">
                      {t("booking.step2.title")}
                    </h3>
                    <p className="text-base text-dark">
                      {t("booking.step2.description")}
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 items-center mb-10">
                  <div className={`p-4 rounded-lg bg-[#00a8e8]`}>
                    <IoAirplaneOutline className="text-2xl" />
                  </div>
                  <div className="w-[75%] leading-5">
                    <h3 className="font-semibold text-lg">
                      {t("booking.step3.title")}
                    </h3>
                    <p className="text-base text-dark">
                      {t("booking.step3.description")}
                    </p>
                  </div>
                </div>
              </div>
            </SynthesisEffect>
          </Col>
          <Col span={7} className="relative">
            <SynthesisEffect animationType="fade" direction="right">
              <Card
                className="h-[350px] shadow-md p-5 rounded-xl gradient-container relative"
                cover={
                  <div className="overflow-hidden h-full relative rounded-lg">
                    <Image
                      src="/booking/booking.jpg"
                      fill
                      className="object-cover"
                      alt={`Feature 1`}
                    />
                  </div>
                }
              >
                <div className="">
                  <h3 className="text-lg font-semibold mb-1">
                    {t("booking.tripTo")} Greece
                  </h3>
                  <h3 className="text-base m-0 text-dark font-normal">
                    14-29 June | by Robbin joseph
                  </h3>
                  <div className="text-dark flex gap-3 my-4">
                    <span className="flex justify-center items-center w-10 h-10 bg-slate-100 rounded-full">
                      <FaLeaf className="text-base" />
                    </span>
                    <span className="flex justify-center items-center w-10 h-10 bg-slate-100 rounded-full">
                      <FaMap className="text-base" />
                    </span>
                    <span className="flex justify-center items-center w-10 h-10 bg-slate-100 rounded-full">
                      <IoPaperPlane className="text-base" />
                    </span>
                  </div>
                  <div className="text-dark flex gap-2 items-center mt-5">
                    <HiOutlineBuildingOffice2 />
                    <h3 className="text-base m-0 text-dark font-normal">
                      24 {t("booking.going")}
                    </h3>
                  </div>
                </div>
              </Card>
              <div className="absolute bottom-5 -right-1/2 flex gap-3 shadow-xl rounded-xl w-[260px] p-5 bg-white leading-5">
                <Image
                  width={60}
                  height={60}
                  src="/booking/rome.jpg"
                  alt="avatar"
                  className="rounded-full"
                />
                <div>
                  <div className="mb-4">
                    <h3 className="text-sm text-dark font-normal">
                      {t("booking.ongoing")}
                    </h3>
                    <h2 className="text-base">{t("booking.tripTo")} Rome</h2>
                  </div>
                  <h3 className="text-base">40% {t("booking.completed")}</h3>
                  <Progress
                    strokeColor={colors["primary-dominant"]}
                    percent={40}
                    size="small"
                    showInfo={false}
                  />
                </div>
              </div>
            </SynthesisEffect>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default FeatureThree;
