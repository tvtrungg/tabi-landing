import "./globals.css";
import type { Metadata } from "next";
import { Vollkorn } from "next/font/google";

import { ConfigProvider } from "antd";
import themeProvider from "../../../config/themeProvider";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {setRequestLocale} from 'next-intl/server';

import ReactQueryProvider from "@/providers/ReactQueryProviders";
import PageTransitionProvider from "../components/PageTransitionProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

const inter = Vollkorn({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Tabi - Travel Agency",
  description:
    "A travel agency which provides the best services for your travel needs",
};

type Props = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <ConfigProvider theme={{ token: themeProvider.token }}>
          <body className={inter.className}>
            <ReactQueryProvider>
              <PageTransitionProvider>
                <Header lang={locale} />
                {children}
                <Footer />
              </PageTransitionProvider>
            </ReactQueryProvider>
          </body>
        </ConfigProvider>
      </NextIntlClientProvider>
    </html>
  );
}
