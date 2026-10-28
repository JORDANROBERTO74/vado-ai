import type { Dictionary } from "@/i18n/dictionaries/en";
import { VadoMark } from "@/components/icons";
import { cn } from "@/lib/utils";

function Sparkline() {
  return (
    <svg viewBox="0 0 80 24" className="mt-auto h-9 w-full" aria-hidden="true">
      <polyline
        fill="none"
        stroke="var(--color-positive)"
        strokeWidth="1.6"
        strokeLinecap="round"
        points="0,20 12,16 24,17 36,11 48,9 60,6 72,4 80,3"
      />
    </svg>
  );
}

export function DashboardMock({
  content,
}: {
  content: Dictionary["agentOs"]["dashboard"];
}) {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden rounded-[24px] border border-paper/10 bg-paper text-ink shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]"
    >
      <div className="flex min-h-[420px]">
        <aside className="hidden w-[186px] shrink-0 border-r border-ink/8 bg-sand/60 p-4 sm:block">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-ink text-paper">
              <VadoMark className="h-3.5 w-3.5" />
            </span>
            <span className="font-serif text-[15px] leading-none text-ink">vado</span>
          </div>

          <p className="mt-6 text-[9px] uppercase tracking-[0.14em] text-ink/35">
            {content.navAnalyze}
          </p>
          <ul className="mt-2 list-none space-y-1 p-0">
            {[content.nav.research, content.nav.alerts, content.nav.tests].map(
              (label, index) => (
                <li key={label}>
                  <span
                    className={cn(
                      "flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px]",
                      index === 0
                        ? "bg-paper font-medium text-ink shadow-sm"
                        : "text-ink/55"
                    )}
                  >
                    <span className="h-2.5 w-2.5 rounded-sm bg-ink/15" />
                    {label}
                  </span>
                </li>
              )
            )}
          </ul>

          <p className="mt-5 text-[9px] uppercase tracking-[0.14em] text-ink/35">
            {content.navBuild}
          </p>
          <ul className="mt-2 list-none space-y-1 p-0">
            {[content.nav.studio, content.nav.knowledge, content.nav.channels].map(
              (label) => (
                <li key={label}>
                  <span className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] text-ink/55">
                    <span className="h-2.5 w-2.5 rounded-sm bg-ink/15" />
                    {label}
                  </span>
                </li>
              )
            )}
          </ul>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col p-4 md:p-5">
          <div className="rounded-lg border border-ink/8 bg-sand/70 px-3.5 py-2.5 text-[12px] text-ink">
            {content.query}
          </div>

          <p className="mt-4 text-[11px] font-medium text-ink">{content.summaryTitle}</p>
          <p className="mt-1 text-[11.5px] leading-relaxed text-ink/60">{content.summary}</p>

          <div className="mt-4 grid flex-1 gap-3 md:grid-cols-2">
            <div className="flex flex-col rounded-xl border border-ink/8 p-4">
              <p className="text-[10px] text-ink/45">{content.metric.label}</p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-[22px] font-medium tracking-[-0.02em] tabular-nums">
                  {content.metric.value}
                </span>
                <span className="text-[11px] font-medium text-positive">
                  {content.metric.delta}
                </span>
              </div>
              <Sparkline />
            </div>

            <div className="flex flex-col rounded-xl border border-ink/8 p-4">
              <div className="flex items-center justify-between">
                <p className="text-[10px] text-ink/45">{content.topicsTitle}</p>
                <span className="text-[9px] uppercase tracking-[0.1em] text-ink/30">
                  {content.period}
                </span>
              </div>
              <ul className="mt-2.5 list-none space-y-2 p-0">
                {content.topics.map((topic) => (
                  <li key={topic.name} className="flex items-center gap-2 text-[10.5px]">
                    <span className="min-w-0 flex-1 truncate text-ink/70">{topic.name}</span>
                    <span className="shrink-0 tabular-nums text-ink/40">{topic.count}</span>
                    <span
                      className={cn(
                        "w-9 shrink-0 text-right tabular-nums",
                        topic.up ? "text-positive" : "text-ink/40"
                      )}
                    >
                      {topic.change}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-3 rounded-lg border border-ink/8 bg-sand/60 px-3.5 py-2 text-[11px] text-ink/35">
            {content.ask}
          </div>
        </div>
      </div>
    </div>
  );
}
