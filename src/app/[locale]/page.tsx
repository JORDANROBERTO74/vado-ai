import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { constructMetadata } from "@/lib/seo";
import { Navigation } from "@/components/landing/navigation";
import { Hero } from "@/components/landing/hero";
import { LogoWall } from "@/components/landing/logo-wall";
import { Features } from "@/components/landing/features";
import { Testimonials } from "@/components/landing/testimonials";
import { Platform } from "@/components/landing/agent-os/platform";
import { Trust } from "@/components/landing/trust";
import { Cta } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = getDictionary(locale as Locale);
  return constructMetadata({
    locale: locale as Locale,
    title: dict.meta.title,
    description: dict.meta.description,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale as Locale);

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        {dict.nav.skip}
      </a>
      <Navigation content={dict.nav} locale={locale as Locale} />
      <main id="main" className="flex-1">
        <Hero content={dict.hero} />
        <LogoWall content={dict.logos} />
        <Features content={dict.features} />
        <Testimonials content={dict.testimonials} />
        <Platform content={dict.agentOs} />
        <Trust content={dict.trust} />
        <Cta content={dict.cta} />
      </main>
      <Footer
        content={dict.footer}
        locale={locale as Locale}
        localeLabel={dict.nav.localeLabel}
      />
    </div>
  );
}
