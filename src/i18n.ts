import {notFound} from 'next/navigation';
import {getRequestConfig, unstable_setRequestLocale} from 'next-intl/server';
 
// Can be imported from a shared config
const locales = ['en', 'vi'];
 
export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
  unstable_setRequestLocale(locale);
  return {
    messages: (await import(`../locales/${locale}.json`)).default
  };
});