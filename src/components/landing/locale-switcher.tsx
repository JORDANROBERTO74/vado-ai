import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({
  currentLocale,
  label,
  inverted = false,
}: {
  currentLocale: Locale;
  label: string;
  inverted?: boolean;
}) {
  return (
    <div
      className="inline-flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.14em]"
      role="group"
      aria-label={label}
    >
      {(["en", "es"] as const).map((locale) => (
        <Link
          key={locale}
          href={`/${locale}`}
          hrefLang={locale}
          aria-current={currentLocale === locale ? "page" : undefined}
          className={cn(
            "px-1 py-0.5 transition-opacity",
            currentLocale === locale
              ? "underline decoration-clay decoration-2 underline-offset-4"
              : inverted
                ? "text-paper/50 hover:text-paper"
                : "text-ink/40 hover:text-ink"
          )}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}
