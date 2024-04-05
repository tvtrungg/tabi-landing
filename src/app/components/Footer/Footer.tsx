import "./Footer.css";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { LINK } from "@/constants/common";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Col, QRCode, Row } from "antd";
type TFooterProps = {};

function Footer({}: TFooterProps) {
  const t = useTranslations("container");

  return (
    <footer id="footer" className="w-full bg-white shadow-custom-2">
      <div className="h-full max-w-screen-xs 2xs:max-w-screen-2xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto py-10">
        <Row gutter={[16, 16]}>
          <Col xs={12} xl={6}>
            <Image
              src="/logo/logo-192x120.svg"
              alt="Tabi Logo"
              width={192}
              height={120}
            />
            <div className="flex items-center gap-3">
              <FaPhoneAlt />
              <h3 className="font-medium mt-2 text-base">
                Hotline:
                <a> 0912 345 678</a>
              </h3>
            </div>
            <h3 className="font-medium mt-2 text-base">
              {t("footer.cskh")}:<a> cskh@tabi.vn</a>
            </h3>
            <h3 className="font-medium mt-2 text-base">
              {t("footer.lhht")}:<a> lhht@tabi.vn</a>
            </h3>
          </Col>
          <Col xs={12} xl={5}>
            <h2 className="pb-3">{t("footer.title")}</h2>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href={`/${LINK.HOME}`}>{t("header.nav1")}</Link>
              </li>
              <li>
                <Link href={`/${LINK.ABOUT}`}>{t("header.nav2")}</Link>
              </li>
              <li>
                <Link href={`/${LINK.SERVICES}`}>{t("header.nav3")}</Link>
              </li>
              <li>
                <Link href={`/${LINK.CONTACT}`}>{t("header.nav4")}</Link>
              </li>
            </ul>
          </Col>
          <Col xs={12} xl={6}>
            <h2 className="mt-8 lg:mt-0 pb-2">{t("footer.subTitle_2")}</h2>
            <div className="flex items-center flex-wrap gap-3">
              <div className="w-8 h-8 relative">
                <Image
                  src="/badge/shopeepay.svg"
                  alt="Tabi Grill"
                  loading="lazy"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-8 h-8 relative">
                <Image
                  src="/badge/mastercard.svg"
                  alt="Tabi Grill"
                  loading="lazy"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-8 h-8 relative">
                <Image
                  src="/badge/zalopay.svg"
                  alt="Tabi Grill"
                  loading="lazy"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-8 h-8 relative">
                <Image
                  src="/badge/momo.svg"
                  alt="Tabi Grill"
                  loading="lazy"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-8 h-8 relative">
                <Image
                  src="/badge/visa.svg"
                  alt="Tabi Grill"
                  loading="lazy"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Col>
          <Col xs={12} xl={7}>
            <h2 className="pb-2">{t("footer.subTitle_4")}</h2>
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <QRCode
                className="p-0"
                size={120}
                bordered={false}
                type="svg"
                value="https://ant.design/"
              />
              <div className="flex flex-col gap-1">
                <a className="opacity-85 hover:opacity-100">
                  <Image
                    src="/badge/appstore.svg"
                    alt="App Store"
                    width={182}
                    height={52}
                  />
                </a>
                <a className="opacity-85 hover:opacity-100">
                  <Image
                    src="/badge/googleplay.svg"
                    alt="CH Play"
                    width={182}
                    height={52}
                  />
                </a>
              </div>
            </div>
          </Col>
        </Row>

       
      </div>
      <div className="footer-copyright py-5 border-0 border-t-[1px] border-solid border-slate-200">
        <div className="max-w-screen-xs 2xs:max-w-screen-2xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex items-center justify-between">
          <div className="flex items-center flex-wrap gap-5">
            <h3>Copyright © 2023 Tabi</h3>
            <ul className="flex items-center flex-wrap gap-3">
              <li>
                <a>Điều khoản</a>
              </li>
              <li>
                <a>Bảo mật</a>
              </li>
              <li>
                <a>Quy định chung</a>
              </li>
            </ul>
          </div>
          <ul className="text-2xl flex justify-around items-center gap-3">
            <li>
              <a href="https://www.facebook.com/wearewraparty" target="_blank">
                <FaFacebook className="text-2xl" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/wearewraparty" target="_blank">
                <AiFillInstagram className="text-2xl" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@wraparty3735" target="_blank">
                <FaYoutube className="text-2xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
