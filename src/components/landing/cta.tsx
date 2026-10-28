import type { Dictionary } from "@/i18n/dictionaries/en";
import { Container, Section } from "@/components/kit";
import { ButtonLink } from "@/components/button";
import { ArrowUpRight } from "@/components/icons";

export function Cta({ content }: { content: Dictionary["cta"] }) {
  return (
    <Section id="contact" className="bg-clay py-section-padding text-paper">
      <Container className="text-center">
        <p className="m-0 text-eyebrow font-medium uppercase text-paper/60">
          {content.eyebrow}
        </p>
        <h2 className="mx-auto mt-6 max-w-[780px] text-section font-medium text-balance">
          {content.title}
        </h2>
        <p className="mx-auto mt-6 max-w-[460px] text-[15px] leading-relaxed text-paper/75">
          {content.intro}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink href={`mailto:${content.secondary}`} variant="light" size="lg">
            {content.primary}
            <ArrowUpRight />
          </ButtonLink>
          <a
            href={`mailto:${content.secondary}`}
            className="inline-flex h-12 items-center rounded-full border border-paper/30 px-6 text-sm font-medium text-paper transition-colors hover:border-paper/70"
          >
            {content.secondary}
          </a>
        </div>
      </Container>
    </Section>
  );
}
