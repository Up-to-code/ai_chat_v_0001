import { Almarai } from "next/font/google";
import "./../globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const almarai = Almarai({
  subsets: ["latin", "arabic"],
  weight: ["300", "400", "700", "800"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // 👈 خليها Promise
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params; // 👈 استخدم await هنا

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      data-theme="emailly"
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <body
        className={`${almarai.className} `}
      >
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
