import { cn } from "@/lib/utils";

function Panel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex h-[188px] flex-col justify-between rounded-2xl border border-ink/8 bg-paper p-4",
        className
      )}
    >
      {children}
    </div>
  );
}

function Bars({ values, highlight }: { values: number[]; highlight?: number }) {
  return (
    <div className="flex h-16 items-end gap-1.5">
      {values.map((value, index) => (
        <div
          key={index}
          className={cn(
            "flex-1 rounded-t-sm",
            index === highlight ? "bg-clay" : "bg-ink/12"
          )}
          style={{ height: `${value}%` }}
        />
      ))}
    </div>
  );
}

export function ImprovePanel({ index }: { index: number }) {
  if (index === 0) {
    return (
      <Panel>
        <div className="space-y-2">
          <div className="h-2 w-[86%] rounded-full bg-ink/12" />
          <div className="h-2 w-[72%] rounded-full bg-clay/50" />
          <div className="h-2 w-[90%] rounded-full bg-ink/12" />
          <div className="h-2 w-[64%] rounded-full bg-ink/12" />
        </div>
        <div className="flex items-center justify-between border-t border-ink/8 pt-3">
          <span className="text-[10px] uppercase tracking-[0.1em] text-ink/35">4,812</span>
          <span className="rounded-full bg-sand px-2 py-0.5 text-[9px] text-ink/50">
            ↗ 12%
          </span>
        </div>
      </Panel>
    );
  }

  if (index === 1) {
    return (
      <Panel>
        <div className="flex items-start gap-2 rounded-lg bg-clay/8 px-2.5 py-2">
          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 w-[80%] rounded-full bg-clay/30" />
            <div className="h-1.5 w-[55%] rounded-full bg-ink/10" />
          </div>
        </div>
        <Bars values={[38, 52, 44, 70, 58, 46]} highlight={3} />
      </Panel>
    );
  }

  if (index === 2) {
    return (
      <Panel>
        <div className="grid flex-1 grid-cols-2 items-center gap-3">
          {[
            { label: "A", value: 61, winner: true },
            { label: "B", value: 54, winner: false },
          ].map((variant) => (
            <div
              key={variant.label}
              className={cn(
                "flex h-24 flex-col justify-between rounded-lg border p-2.5",
                variant.winner ? "border-clay/40 bg-clay/5" : "border-ink/8"
              )}
            >
              <span className="text-[10px] font-medium text-ink/40">{variant.label}</span>
              <span
                className={cn(
                  "text-[18px] font-medium tabular-nums",
                  variant.winner ? "text-clay" : "text-ink/40"
                )}
              >
                {variant.value}%
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-ink/8">
          <div className="h-full w-[61%] rounded-full bg-clay" />
        </div>
      </Panel>
    );
  }

  return (
    <Panel>
      <ul className="list-none space-y-3 p-0">
        {[
          { width: 78, time: "0.4s" },
          { width: 56, time: "1.2s" },
          { width: 92, time: "0.2s" },
          { width: 64, time: "0.7s" },
        ].map((row, rowIndex) => (
          <li key={rowIndex} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink/25" />
            <span
              className="h-1.5 rounded-full bg-ink/12"
              style={{ width: `${row.width}%` }}
            />
            <span className="ml-auto text-[9px] tabular-nums text-ink/30">{row.time}</span>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-center gap-2 border-t border-ink/8 pt-3">
        <span className="h-4 w-4 rounded-full border border-ink/15" />
        <span className="h-1.5 w-20 rounded-full bg-ink/10" />
      </div>
    </Panel>
  );
}

export function DataPanel({ index }: { index: number }) {
  if (index === 0) {
    return (
      <Panel>
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sand text-[11px] font-medium text-ink/40">
            MT
          </span>
          <div className="space-y-1.5">
            <div className="h-1.5 w-16 rounded-full bg-ink/15" />
            <div className="h-1.5 w-10 rounded-full bg-ink/8" />
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {["48", "12", "VIP"].map((chip) => (
            <span
              key={chip}
              className="rounded-full bg-sand px-2 py-1 text-[9px] text-ink/45"
            >
              {chip}
            </span>
          ))}
        </div>
      </Panel>
    );
  }

  if (index === 1) {
    return (
      <Panel>
        <div className="overflow-hidden rounded-lg border border-ink/8">
          <div className="grid grid-cols-3 gap-px bg-ink/8">
            {[0, 1, 2].map((cell) => (
              <div key={cell} className="h-5 bg-sand" />
            ))}
            {[0, 1, 2, 3, 4, 5].map((cell) => (
              <div key={`b-${cell}`} className="h-5 bg-paper" />
            ))}
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="h-1.5 w-[70%] rounded-full bg-ink/10" />
          <div className="h-1.5 w-[45%] rounded-full bg-ink/8" />
        </div>
      </Panel>
    );
  }

  if (index === 2) {
    return (
      <Panel>
        <ul className="list-none space-y-2.5 p-0">
          {[
            { width: 88, value: "0.91" },
            { width: 62, value: "0.74" },
            { width: 40, value: "0.38" },
          ].map((row, rowIndex) => (
            <li key={rowIndex} className="flex items-center gap-2">
              <span
                className={cn(
                  "h-5 w-5 shrink-0 rounded-md",
                  rowIndex === 0 ? "bg-clay/15" : "bg-sand"
                )}
              />
              <span className="h-1.5 flex-1 rounded-full bg-ink/10">
                <span
                  className={cn(
                    "block h-1.5 rounded-full",
                    rowIndex === 0 ? "bg-clay" : "bg-ink/25"
                  )}
                  style={{ width: `${row.width}%` }}
                />
              </span>
              <span className="text-[9px] tabular-nums text-ink/35">{row.value}</span>
            </li>
          ))}
        </ul>
        <div className="mt-2 h-1.5 w-24 rounded-full bg-ink/8" />
      </Panel>
    );
  }

  return (
    <Panel>
      <div className="relative flex flex-1 items-center">
        <span className="absolute inset-x-0 top-1/2 h-px bg-ink/10" />
        {[0, 1, 2].map((node) => (
          <span
            key={node}
            className={cn(
              "relative z-10 flex-1",
              node === 0 ? "text-left" : node === 2 ? "text-right" : "text-center"
            )}
          >
            <span
              className={cn(
                "inline-block h-2.5 w-2.5 rounded-full border-2 border-paper",
                node === 1 ? "bg-clay ring-2 ring-clay/20" : "bg-ink/25"
              )}
            />
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-ink/8 pt-3">
        <span className="text-[9px] uppercase tracking-[0.1em] text-ink/30">T−2</span>
        <span className="h-1.5 w-1.5 rounded-full bg-clay" />
        <span className="text-[9px] uppercase tracking-[0.1em] text-ink/30">T+2</span>
      </div>
    </Panel>
  );
}
