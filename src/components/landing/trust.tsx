import type { Dictionary } from "@/i18n/dictionaries/en";
import { Container, Eyebrow, Section, SectionTitle } from "@/components/kit";
import { Shield } from "@/components/icons";
import { Reveal } from "./reveal";

export function Trust({ content }: { content: Dictionary["trust"] }) {
  return (
    <Section id="trust" className="bg-sand py-section-padding">
      <Container>
        <Reveal className="max-w-[640px]">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <SectionTitle className="mt-5">{content.title}</SectionTitle>
          <p className="mt-5 max-w-[520px] text-[15px] leading-relaxed text-ink-soft">
            {content.intro}
          </p>
        </Reveal>

        <ul className="mt-12 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 lg:grid-cols-6">
          {content.badges.map((badge) => (
            <li key={badge.label}>
              <div className="flex h-full flex-col justify-between rounded-xl border border-ink/10 p-4">
                <Shield className="h-4 w-4 text-clay" />
                <div className="mt-6">
                  <p className="m-0 text-[12.5px] font-medium leading-tight text-ink">
                    {badge.label}
                  </p>
                  <p className="m-0 mt-1 text-[11px] leading-snug text-ink/45">{badge.sub}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-[11px] text-ink/35">{content.note}</p>
      </Container>
    </Section>
  );
}
