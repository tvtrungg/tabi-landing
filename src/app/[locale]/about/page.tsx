import Welcome from "@/app/components/HomePage/Welcome";
import { unstable_setRequestLocale } from "next-intl/server";

type TAboutProps = {
  params: {
    locale: string;
  };
};

function About({ params: { locale } }: TAboutProps) {
  unstable_setRequestLocale(locale);

  return <Welcome />;
}

export default About;
