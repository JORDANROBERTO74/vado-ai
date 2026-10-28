import type { Dictionary } from "@/i18n/dictionaries/en";
import { Container, Eyebrow, Section, SectionTitle } from "@/components/kit";
import { Check, VadoMark } from "@/components/icons";
import { cn } from "@/lib/utils";
import { DashboardMock } from "./dashboard";
import { ImprovePanel, DataPanel } from "./panels";

type Content = Dictionary["agentOs"];

function BuildMock({
  content,
  label,
}: {
  content: Content["build"]["blocks"]["build"];
  label: string;
}) {
  return (
    <div
      aria-hidden="true"
      className="flex h-[300px] flex-col rounded-2xl border border-ink/8 bg-paper p-4 shadow-[0_18px_40px_-30px_rgba(15,17,16,0.4)]"
    >
      <div className="flex items-center justify-between border-b border-ink/8 pb-3">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-ink text-paper">
            <VadoMark className="h-3 w-3" />
          </span>
          <span className="text-[11px] font-medium text-ink">{label}</span>
        </div>
        <span className="rounded-md border border-ink/10 px-2 py-0.5 text-[10px] text-ink/45">
          {content.action}
        </span>
      </div>

      <p className="mt-3 rounded-lg bg-sand px-3 py-2 text-[11.5px] leading-relaxed text-ink/75">
        {content.prompt}
      </p>

      <ul className="mt-4 list-none space-y-2 p-0">
        {content.steps.map((step, index) => {
          const done = index < content.steps.length - 1;
          return (
            <li key={step} className="flex items-center gap-2 text-[11px]">
              {done ? (
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-positive/10 text-positive">
                  <Check className="h-2.5 w-2.5" />
                </span>
              ) : (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink/15 border-t-clay" />
              )}
              <span className={done ? "text-ink/45" : "text-ink"}>{step}</span>
            </li>
          );
        })}
      </ul>

      <div className="mt-auto rounded-lg border border-ink/8 bg-sand/60 px-3 py-2 text-[11px] text-ink/30">
        {content.placeholder}
      </div>
    </div>
  );
}

function OptimizeMock({
  content,
}: {
  content: Content["build"]["blocks"]["optimize"];
}) {
  return (
    <div
      aria-hidden="true"
      className="flex h-[300px] flex-col rounded-2xl border border-ink/8 bg-paper p-4 shadow-[0_18px_40px_-30px_rgba(15,17,16,0.4)]"
    >
      <p className="text-[11px] font-medium text-ink">{content.heading}</p>

      <ul className="mt-3 flex-1 list-none space-y-2 p-0">
        {content.suggestions.map((suggestion, index) => (
          <li
            key={suggestion}
            className={cn(
              "rounded-lg border px-3 py-2.5 text-[11px] leading-snug",
              index === 0
                ? "border-clay/30 bg-clay/5 text-ink"
                : "border-ink/8 bg-sand/50 text-ink/60"
            )}
          >
            {suggestion}
          </li>
        ))}
      </ul>

      <div className="mt-3 flex flex-wrap gap-2 border-t border-ink/8 pt-3">
        {content.actions.map((action) => (
          <span
            key={action}
            className="rounded-full bg-sand px-3 py-1.5 text-[10.5px] font-medium text-ink/55"
          >
            {action}
          </span>
        ))}
      </div>
    </div>
  );
}

function PanelGrid({
  features,
  kind,
}: {
  features: { title: string; description: string }[];
  kind: "improve" | "data";
}) {
  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <div key={feature.title}>
          {kind === "improve" ? <ImprovePanel index={index} /> : <DataPanel index={index} />}
          <h3 className="mt-5 text-[15px] font-medium text-ink">{feature.title}</h3>
          <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export function Platform({ content }: { content: Content }) {
  return (
    <>
      <Section id="platform" className="bg-ink py-section-padding text-paper">
        <Container>
          <div className="max-w-[640px]">
            <Eyebrow>{content.eyebrow}</Eyebrow>
            <h2 className="mt-5 text-section font-medium text-balance">{content.title}</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-paper/60">{content.intro}</p>
          </div>

          <div className="mt-12">
            <DashboardMock content={content.dashboard} />
          </div>
        </Container>
      </Section>

      <Section className="bg-paper py-section-padding">
        <Container>
          <div className="max-w-[640px]">
            <Eyebrow>{content.build.eyebrow}</Eyebrow>
            <SectionTitle className="mt-5">{content.build.title}</SectionTitle>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
              {content.build.intro}
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-8">
            <div>
              <BuildMock
                content={content.build.blocks.build}
                label={content.build.eyebrow}
              />
              <h3 className="mt-6 text-[17px] font-medium text-ink">
                {content.build.blocks.build.title}
              </h3>
              <p className="mt-2 max-w-[420px] text-[13.5px] leading-relaxed text-ink-soft">
                {content.build.blocks.build.description}
              </p>
            </div>
            <div>
              <OptimizeMock content={content.build.blocks.optimize} />
              <h3 className="mt-6 text-[17px] font-medium text-ink">
                {content.build.blocks.optimize.title}
              </h3>
              <p className="mt-2 max-w-[420px] text-[13.5px] leading-relaxed text-ink-soft">
                {content.build.blocks.optimize.description}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-sand py-section-padding">
        <Container>
          <div className="max-w-[640px]">
            <SectionTitle>{content.improve.title}</SectionTitle>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
              {content.improve.intro}
            </p>
          </div>
          <PanelGrid features={content.improve.features} kind="improve" />
        </Container>
      </Section>

      <Section className="bg-paper py-section-padding">
        <Container>
          <div className="max-w-[640px]">
            <SectionTitle>{content.data.title}</SectionTitle>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
              {content.data.intro}
            </p>
          </div>
          <PanelGrid features={content.data.features} kind="data" />
        </Container>
      </Section>
    </>
  );
}
