import Link from "next/link";
import { defaultLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default function NotFound() {
  const dict = getDictionary(defaultLocale).notFound;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="font-serif text-[28px] leading-none text-ink">
        Vado<span className="text-clay">.</span>
      </span>
      <h1 className="mt-10 text-display font-medium text-balance">{dict.title}</h1>
      <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft">{dict.body}</p>
      <Link
        href={`/${defaultLocale}`}
        className="mt-10 inline-flex h-11 items-center rounded-full bg-ink px-5 text-sm font-medium text-paper transition-colors hover:bg-ink/85"
      >
        {dict.cta}
      </Link>
    </main>
  );
}
