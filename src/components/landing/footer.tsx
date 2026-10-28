import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/config";
import { LocaleSwitcher } from "./locale-switcher";

export function Footer({
  content,
  locale,
  localeLabel,
}: {
  content: Dictionary["footer"];
  locale: Locale;
  localeLabel: string;
}) {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto w-full max-w-[1180px] px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link
              href={`/${locale}`}
              className="font-serif text-[28px] leading-none tracking-[-0.02em]"
              aria-label={content.brand}
            >
              {content.brand}
              <span className="text-clay">.</span>
            </Link>
            <p className="mt-5 max-w-[300px] text-[13px] leading-relaxed text-paper/50">
              {content.blurb}
            </p>
            <a
              href={`mailto:${content.email}`}
              className="mt-6 inline-block text-[13px] text-paper underline decoration-paper/30 underline-offset-4 transition-colors hover:decoration-paper"
            >
              {content.email}
            </a>
          </div>

          {content.columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="m-0 text-[10px] uppercase tracking-[0.14em] text-paper/35">
                {column.title}
              </p>
              <ul className="mt-4 list-none space-y-2.5 p-0">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-paper/60 transition-colors hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-paper/10 pt-6 text-[11px] text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0">{content.locations}</p>
          <div className="flex items-center gap-6">
            <LocaleSwitcher
              currentLocale={locale}
              label={localeLabel}
              inverted
            />
            <p className="m-0">{content.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
