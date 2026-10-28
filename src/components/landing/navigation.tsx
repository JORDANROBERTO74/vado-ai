"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import { buttonClass } from "@/components/button";
import { LocaleSwitcher } from "./locale-switcher";
import { cn } from "@/lib/utils";

export function Navigation({
  content,
  locale,
}: {
  content: Dictionary["nav"];
  locale: Locale;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const links = [
    { label: content.links.product, href: "#product" },
    { label: content.links.customers, href: "#customers" },
    { label: content.links.trust, href: "#trust" },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-ink/10 bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between px-6 lg:px-10">
        <Link
          href={`/${locale}`}
          className="font-serif text-[26px] leading-none tracking-[-0.02em] text-ink"
          aria-label={content.brand}
        >
          {content.brand}
          <span className="text-clay">.</span>
        </Link>

        <nav aria-label={content.links.product} className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <LocaleSwitcher currentLocale={locale} label={content.localeLabel} />
          <Link
            href="mailto:hola@vado.example"
            className="text-[13px] font-medium text-ink/70 transition-colors hover:text-ink"
          >
            {content.signIn}
          </Link>
          <Link href="#contact" className={buttonClass("primary", "sm")}>
            {content.cta}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? content.closeMenu : content.openMenu}
          className="-mr-2 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span aria-hidden="true" className="relative block h-3 w-5">
            <span
              className={cn(
                "absolute left-0 h-px w-5 bg-ink transition-transform duration-300",
                open ? "top-1.5 rotate-45" : "top-0"
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-px w-5 bg-ink transition-opacity duration-200",
                open ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "absolute left-0 h-px w-5 bg-ink transition-transform duration-300",
                open ? "top-1.5 -rotate-45" : "top-3"
              )}
            />
          </span>
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="flex h-[calc(100dvh-72px)] flex-col border-t border-ink/10 bg-paper px-6 pb-10 pt-8 md:hidden"
        >
          <nav aria-label={content.links.product} className="flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-serif text-4xl leading-none tracking-[-0.02em]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className={buttonClass("primary", "lg") + " mt-10"}
          >
            {content.cta}
          </Link>

          <div className="mt-auto flex items-center justify-between border-t border-ink/10 pt-5">
            <Link href="mailto:hola@vado.example" className="text-sm text-ink/60">
              {content.signIn}
            </Link>
            <LocaleSwitcher currentLocale={locale} label={content.localeLabel} />
          </div>
        </div>
      )}
    </header>
  );
}
