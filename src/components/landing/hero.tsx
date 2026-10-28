import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Container, Eyebrow, Section } from "@/components/kit";
import { ButtonLink } from "@/components/button";
import { ArrowUpRight } from "@/components/icons";
import { ChatDemo } from "./chat-demo";

export function Hero({ content }: { content: Dictionary["hero"] }) {
  return (
    <Section className="overflow-hidden pt-[72px]">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-sand" />
      <div
        aria-hidden="true"
        className="dot-grid absolute inset-0 -z-10 opacity-60"
        style={{
          maskImage: "radial-gradient(70% 60% at 80% 10%, black, transparent)",
          WebkitMaskImage: "radial-gradient(70% 60% at 80% 10%, black, transparent)",
        }}
      />

      <Container className="grid gap-14 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:py-24">
        <div>
          <Eyebrow>{content.eyebrow}</Eyebrow>

          <h1 className="mt-6 text-display font-medium text-ink text-balance">
            {content.titleLead}{" "}
            <em className="font-serif italic text-clay">{content.titleEm}</em>
          </h1>

          <p className="mt-7 max-w-[520px] text-[15px] leading-relaxed text-ink-soft">
            {content.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <ButtonLink href="#contact" variant="primary" size="lg" className="justify-center">
              {content.primaryCta}
              <ArrowUpRight />
            </ButtonLink>
            <Link
              href="#product"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink/20 px-6 text-sm font-medium text-ink transition-colors hover:border-ink/50"
            >
              {content.secondaryCta}
            </Link>
          </div>

          <dl className="mt-12 grid max-w-[520px] grid-cols-3 gap-6 border-t border-ink/10 pt-6">
            {content.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-[12px] tabular-nums text-ink/45">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-[13px] leading-snug text-ink-soft">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:pl-4">
          <ChatDemo content={content.chat} />
        </div>
      </Container>
    </Section>
  );
}
