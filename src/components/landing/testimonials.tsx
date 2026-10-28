import type { Dictionary } from "@/i18n/dictionaries/en";
import { Container, Eyebrow, Section, SectionTitle } from "@/components/kit";
import { Reveal } from "./reveal";

type Testimonial = Dictionary["testimonials"]["items"][number];

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-card border border-ink/8 bg-paper p-7">
      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/35">
        {item.company}
      </span>
      <blockquote className="mt-6 flex-1 text-[15px] leading-relaxed text-ink">
        &ldquo;{item.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-7 border-t border-ink/8 pt-5">
        <p className="m-0 text-[13px] font-medium text-ink">{item.name}</p>
        <p className="m-0 mt-1 text-[12px] text-ink/50">{item.role}</p>
      </figcaption>
    </figure>
  );
}

export function Testimonials({ content }: { content: Dictionary["testimonials"] }) {
  return (
    <Section id="customers" className="bg-sand py-section-padding">
      <Container>
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <SectionTitle className="mt-5">{content.title}</SectionTitle>
          </div>
        </Reveal>

        <div className="mt-12 hidden gap-5 md:grid md:auto-rows-fr md:grid-cols-2">
          {content.items.map((item) => (
            <Reveal key={item.name}>
              <TestimonialCard item={item} />
            </Reveal>
          ))}
        </div>

        <div className="no-scrollbar -mx-6 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:hidden">
          {content.items.map((item) => (
            <div key={item.name} className="w-[85%] shrink-0 snap-start">
              <TestimonialCard item={item} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
