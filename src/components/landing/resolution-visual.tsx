import type { Dictionary } from "@/i18n/dictionaries/en";
import { Check } from "@/components/icons";

export function ResolutionVisual({
  content,
}: {
  content: Dictionary["features"]["primary"]["visual"];
}) {
  return (
    <div className="rounded-[22px] border border-paper/12 bg-paper/[0.04] p-5">
      <div className="flex items-center justify-between gap-3 border-b border-paper/10 pb-3">
        <span className="text-[11px] uppercase tracking-[0.1em] text-paper/45">
          {content.ref}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-positive/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-positive">
          <Check className="h-3 w-3" />
          {content.status}
        </span>
      </div>

      <div className="mt-4 space-y-2">
        <p className="ml-auto w-fit max-w-[88%] rounded-2xl rounded-br-md bg-paper/10 px-3.5 py-2 text-[12px] leading-relaxed text-paper/85">
          {content.user}
        </p>
        <p className="w-fit max-w-[85%] rounded-2xl rounded-bl-md bg-clay px-3.5 py-2 text-[12px] leading-relaxed text-paper">
          {content.agent}
        </p>
      </div>

      <ul className="mt-5 list-none space-y-2.5 border-t border-paper/10 p-0 pt-4">
        {content.steps.map((step) => (
          <li key={step.label} className="flex items-center gap-2.5 text-[11px] text-paper/60">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-paper/10 text-paper/70">
              <Check className="h-2.5 w-2.5" />
            </span>
            <span className="flex-1">{step.label}</span>
            <span className="tabular-nums text-paper/35">{step.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
