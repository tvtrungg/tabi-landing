
import CustomForm from "@/app/components/CustomForm";
import { useTranslations } from "next-intl";
import {setRequestLocale} from 'next-intl/server';

type TContactProps = {
  params: {
    locale: string;
  };
};

export default function Contact({ params: { locale } }: TContactProps) {
  setRequestLocale(locale);
  const t = useTranslations("container");



  return (
    <div className="w-full h-full">
      <div className="h-[calc(100vh-80px)] w-full bg-contact">
        <div className="xs:max-w-screen-xs 2xs:max-w-screen-2xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto relative h-screen">
          <h1 className="text-5xl xs:text-6xl 2xs:text-7xl md:text-8xl lg:text-9xl mt-20 mb-14 uppercase"></h1>
          <div className="w-full sm:w-1/2 lg:w-[50%]  z-[2] translate-y-1/2">
            <h1 className="text-8xl">{t("contactPage.subTitle")}</h1>
            <h4 className="tracking-wider text-lg sm:text-lg font-normal text-slate-800 mt-4">
              {t("contactPage.description")}
            </h4>
          </div>
        </div>
      </div>
      <div className="xs:max-w-screen-xs 2xs:max-w-screen-2xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto relative h-full my-20">
        <h1 className="text-6xl text-center mb-10">
          {t("contactPage.subTitle_2")}
        </h1>
        <div className="w-full h-full sm:h-[440px] flex justify-between items-start text-black rounded-3xl overflow-hidden flex-col-reverse sm:flex-row sm:items-center">
          <div className="w-full h-full sm:basis-[60%]">
            <iframe
              className="border-none"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d720.1025850658905!2d106.68199968706689!3d10.762702121271957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1c06f4e1dd%3A0x43900f1d4539a3d!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBLaG9hIGjhu41jIFThu7Egbmhpw6puIC0gxJDhuqFpIGjhu41jIFF14buRYyBnaWEgVFAuSENN!5e0!3m2!1svi!2s!4v1719891005588!5m2!1svi!2s"
              width="100%"
              height="440"
              loading="lazy"
            ></iframe>
          </div>

          <div className="map-content w-full h-full sm:basis-[40%]">
            <CustomForm  />
          </div>
        </div>
      </div>
    </div>
  );
}
