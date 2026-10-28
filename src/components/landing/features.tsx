import type { Dictionary } from "@/i18n/dictionaries/en";
import { Container, Eyebrow, Section, SectionTitle } from "@/components/kit";
import { Reveal } from "./reveal";
import { ResolutionVisual } from "./resolution-visual";

export function Features({ content }: { content: Dictionary["features"] }) {
  return (
    <Section id="product" className="bg-paper py-section-padding">
      <Container>
        <Reveal className="max-w-[720px]">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <SectionTitle className="mt-5">{content.title}</SectionTitle>
          <p className="mt-5 max-w-[560px] text-[15px] leading-relaxed text-ink-soft">
            {content.intro}
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <div className="grid gap-8 rounded-card bg-ink p-7 text-paper lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-12 lg:p-10">
            <div>
              <span className="text-[11px] uppercase tracking-[0.14em] text-clay">
                {content.primary.label}
              </span>
              <h3 className="mt-4 text-[26px] font-medium leading-[1.1] tracking-[-0.02em]">
                {content.primary.title}
              </h3>
              <p className="mt-4 max-w-[380px] text-[14px] leading-relaxed text-paper/60">
                {content.primary.description}
              </p>
            </div>
            <ResolutionVisual content={content.primary.visual} />
          </div>
        </Reveal>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item, index) => (
            <Reveal
              key={item.title}
              className={index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <div className="flex h-full flex-col rounded-card bg-sand p-7">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.14em] text-clay">
                    {item.label}
                  </span>
                  <span className="font-serif text-[15px] italic text-ink/25">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-[19px] font-medium leading-[1.15] tracking-[-0.015em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[460px] text-[13.5px] leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
