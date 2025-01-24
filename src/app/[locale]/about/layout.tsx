import "./about.css";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

type AboutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default function AboutLayout({
  children, // will be a page or nested layout
  params: { locale },
}: AboutProps) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  return <section>{children}</section>;
}
