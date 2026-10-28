import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Container, Section } from "@/components/kit";
import { ArrowRight } from "@/components/icons";
import { cn } from "@/lib/utils";

export function LogoWall({ content }: { content: Dictionary["logos"] }) {
  return (
    <Section className="border-b border-ink/8 bg-paper py-14 lg:py-16">
      <Container>
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="m-0 text-[13px] text-ink/50">{content.title}</p>
          <Link
            href="#customers"
            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-ink underline decoration-ink/20 underline-offset-4 transition-colors hover:decoration-ink"
          >
            {content.cta}
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <ul className="mt-10 grid list-none grid-cols-3 gap-x-4 gap-y-8 p-0 sm:grid-cols-4 md:grid-cols-5 md:gap-x-8 md:gap-y-9">
          {content.items.map((name, index) => (
            <li
              key={name}
              className={cn(
                "flex items-center justify-center",
                index >= 12 && "hidden sm:flex"
              )}
            >
              <span className="select-none text-center text-[12px] font-semibold uppercase tracking-[0.12em] text-ink/30 transition-colors hover:text-ink/60 md:text-[13px]">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
