import type { Metadata } from "next";
import "./globals.css";
import { Vollkorn } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ConfigProvider } from "antd";
import themeProvider from "../../../config/themeProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import ReactQueryProvider from "@/providers/ReactQueryProviders";
import PageTransitionProvider from "../components/PageTransitionProvider";

const locales = ["en", "vi"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
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

// const RootLayout: React.FC<Props> = ({ children, params: { locale } }) => {
//   const messages = useMessages();
//   return (
//     <html lang={locale}>
//       <NextIntlClientProvider messages={messages}>
//         <ConfigProvider theme={{ token: themeProvider.token }}>
//           <body className={inter.className}>
//             <ReactQueryProvider>
//               {/* <Loading /> */}
//               <PageTransitionProvider>
//                 <Header lang={locale} />
//                 {children}
//                 <Footer />
//               </PageTransitionProvider>
//             </ReactQueryProvider>
//           </body>
//         </ConfigProvider>
//       </NextIntlClientProvider>
//     </html>
//   );
// };

// export default RootLayout;

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
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
