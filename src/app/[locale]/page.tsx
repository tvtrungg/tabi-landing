import { Button, Col, Row } from "antd";
import Video from "../components/HomePage/Video";
import { useTranslations } from "next-intl";
import { IoLocationOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { FaRegCalendarCheck } from "react-icons/fa";
import Destinations from "../components/HomePage/Destinations";
import Romantic from "../components/HomePage/Romantic/Romantic";
import Feature from "../components/HomePage/Features";
import Download from "../components/HomePage/Download";
import BackToTop from "../components/BackToTop";

export default function Home() {
  const t = useTranslations("container");

  return (
    <>
      <div className="relative h-screen w-full">
        {/* <Video
          srcVideo="/japan-bg.mp4"
          poster="/poster-1.png"
          srcImg="/bg-3.jpg"
          // overlay
        /> */}
        <Video
          srcVideo="/202403251505.mp4"
          poster="/poster.png"
          srcImg="/home-bg.png"
          overlay
        />

        <div className="max-w-screen-xl h-screen mx-auto" id="main">
          <div className="w-[35%] text-white z-[2] mx-14 2xl:mx-0 translate-y-1/2">
            <h4 className="relative text-center mb-5 text-lg">
              <span className="acreage-before">{t("homePage.acreage")}</span>
            </h4>
            <h1 className="text-8xl text-primary-accent-lighter">
              {t("homePage.title")}
              <span className="text-white">{t("homePage.title2")}</span>
            </h1>
            <h4 className="tracking-wider text-lg font-normal text-white mt-4">
              {t("homePage.subTitle")}
            </h4>
          </div>
        </div>
        <Row className="absolute bottom-[5%] left-1/2 -translate-x-1/2  w-[70%] h-24 px-10 bg-white rounded-2xl items-center mx-auto shadow-custom-1">
          <Col span={7} className="flex gap-1">
            <IoLocationOutline className="text-2xl align-text-bottom mr-1" />
            <div>
              <h3 className="text-xl">{t("homePage.criteria.item1")}</h3>
              <p className="text-grey text-base">
                {t("homePage.criteria.item1_sub")}
              </p>
            </div>
          </Col>
          <Col span={7} className="flex gap-1">
            <CiStar className="text-2xl align-text-bottom mr-1" />
            <div>
              <h3 className="text-xl">{t("homePage.criteria.item2")}</h3>
              <p className="text-grey text-base">
                {t("homePage.criteria.item2_sub")}
              </p>
            </div>
          </Col>
          <Col span={6} className="flex gap-1">
            <HiOutlineUserGroup className="text-2xl align-text-bottom mr-1" />
            <div>
              <h3 className="text-xl">{t("homePage.criteria.item3")}</h3>
              <p className="text-grey text-base">
                {t("homePage.criteria.item3_sub")}
              </p>
            </div>
          </Col>
          <Col span={4} className="flex justify-end">
            <Button
              type="primary"
              className="h-full flex flex-col gap-1 items-center p-2 px-8 rounded-xl text-base"
            >
              <FaRegCalendarCheck className="text-2xl" />
              {t("homePage.criteria.book_btn")}
            </Button>
          </Col>
        </Row>
      </div>

      <Destinations />
      <Romantic />
      <Feature />
      <Download />
      <BackToTop />
    </>
  );
}
