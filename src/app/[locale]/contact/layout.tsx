import "./contact.css";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

type ContactProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default function ContactLayout({
  children, // will be a page or nested layout
  params: { locale },
}: ContactProps) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  return <section>{children}</section>;
}
