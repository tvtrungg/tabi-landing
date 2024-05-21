// import createMiddleware from "next-intl/middleware";
// import { type NextRequest, type NextResponse } from "next/server";

// export const config = {
//   // Match only internationalized pathnames
//   matcher: ["/", "/(vi|en)/:path*"],
// };

// const nextIntlMiddleware = createMiddleware({
//   // A list of all locales that are supported
//   locales: ["en", "vi"],

//   // Used when no locale matches
//   defaultLocale: "en",
//   localePrefix: "always",
// });

// // eslint-disable-next-line import/no-anonymous-default-export
// export default function (req: NextRequest): NextResponse {
//   return nextIntlMiddleware(req);
// }

import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "vi"],

  // Used when no locale matches
  defaultLocale: "en",
  localePrefix: "always",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(vi|en)/:path*"],
};
