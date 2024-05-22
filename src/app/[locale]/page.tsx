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
import { unstable_setRequestLocale } from "next-intl/server";

type THomeProps = {
  params: {
    locale: string;
  };
};

export default function Home({ params: { locale } }: THomeProps) {
  unstable_setRequestLocale(locale);
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

        <div
          className="h-screen xs:max-w-screen-xs 2xs:max-w-screen-2xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto"
          id="main"
        >
          <div className="w-full sm:w-1/2 lg:w-[35%] text-white z-[2] translate-y-1/2">
            <h4 className="relative md:text-center mb-5 text-lg">
              <span className="acreage-before">{t("homePage.acreage")}</span>
            </h4>
            <h1 className="text-6xl 2xs:text-7xl sm:text-8xl text-primary-accent-lighter">
              {t("homePage.title")}
              <span className="text-white">{t("homePage.title2")}</span>
            </h1>
            <h4 className="tracking-wider text-lg sm:text-lg font-normal text-white mt-4">
              {t("homePage.subTitle")}
            </h4>
          </div>
        </div>
        {/* md=991, lg=1200 */}
        <div className="w-full flex flex-col gap-2 absolute bottom-[2%] lg:bottom-[5%] left-1/2 -translate-x-1/2 xs:max-w-screen-xs 2xs:max-w-screen-2xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto">
          <Row
            gutter={[24, 24]}
            className="w-full px-5 xl:px-10 py-4 bg-white rounded-2xl items-center shadow-custom-1 !mx-0"
          >
            <Col md={24} lg={20} xl={20}>
              <Row gutter={[16, 16]} className="flex-col md:flex-row">
                <Col span={24} md={8} className="flex gap-1">
                  <IoLocationOutline className="text-2xl align-text-bottom mr-1" />
                  <div>
                    <h3 className="text-lg sm:text-xl">
                      {t("homePage.criteria.item1")}
                    </h3>
                    <p className="text-grey text-sm sm:text-base">
                      {t("homePage.criteria.item1_sub")}
                    </p>
                  </div>
                </Col>
                <Col span={24} md={9} className="flex gap-1">
                  <CiStar className="text-2xl align-text-bottom mr-1" />
                  <div>
                    <h3 className="text-lg sm:text-xl">
                      {t("homePage.criteria.item2")}
                    </h3>
                    <p className="text-grey text-sm sm:text-base">
                      {t("homePage.criteria.item2_sub")}
                    </p>
                  </div>
                </Col>
                <Col span={24} md={7} className="flex gap-1">
                  <HiOutlineUserGroup className="text-2xl align-text-bottom mr-1" />
                  <div>
                    <h3 className="text-lg sm:text-xl">
                      {t("homePage.criteria.item3")}
                    </h3>
                    <p className="text-grey text-sm sm:text-base">
                      {t("homePage.criteria.item3_sub")}
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={4} xl={4} className="hidden lg:block">
              <Button
                type="primary"
                className="h-full flex flex-col gap-1 items-center p-2 px-10 rounded-xl text-base mx-auto"
              >
                <FaRegCalendarCheck className="text-2xl" />
                {t("homePage.criteria.book_btn")}
              </Button>
            </Col>
          </Row>
          <Button
            type="primary"
            className="lg:hidden h-full w-full flex justify-center gap-1 p-2 sm:p-2.5 items-center rounded-xl text-base"
          >
            {t("homePage.criteria.book_btn")}
            <FaRegCalendarCheck className="text-xl md:text-2xl" />
          </Button>
        </div>
      </div>

      <Destinations />
      <Romantic />
      <Feature />
      <Download />
      <BackToTop />
    </>
  );
}
