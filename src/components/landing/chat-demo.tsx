"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { VadoMark } from "@/components/icons";

const LOOP_MS = 7000;

export function ChatDemo({ content }: { content: Dictionary["hero"]["chat"] }) {
  const reduced = useReducedMotion();
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (reduced) return;

    if (count >= content.messages.length) {
      const reset = setTimeout(() => setCount(1), LOOP_MS);
      return () => clearTimeout(reset);
    }
    const next = content.messages[count];
    const delay = next.role === "agent" ? 1900 : 1300;
    const timer = setTimeout(() => setCount((value) => value + 1), delay);
    return () => clearTimeout(timer);
  }, [count, reduced, content.messages]);

  const shown = reduced ? content.messages.length : count;
  const visible = content.messages.slice(0, shown);
  const typing =
    !reduced && count < content.messages.length && content.messages[count].role === "agent";

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="overflow-hidden rounded-[26px] border border-ink/10 bg-paper shadow-[0_24px_60px_-30px_rgba(15,17,16,0.35)]">
        <div className="flex items-center gap-3 border-b border-ink/8 px-5 py-4">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-paper">
            <VadoMark className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-medium text-ink">{content.name}</p>
            <p className="truncate text-[11px] text-ink/45">{content.role}</p>
          </div>
          <span className="ml-auto flex items-center gap-1.5 text-[10px] uppercase tracking-[0.12em] text-ink/40">
            <span
              className="h-1.5 w-1.5 rounded-full bg-positive"
              style={{ animation: reduced ? undefined : "pulse-dot 2s ease-in-out infinite" }}
            />
            {content.status}
          </span>
        </div>

        <div
          className="flex h-[400px] flex-col justify-end gap-3 overflow-hidden px-5 py-5"
          style={{
            maskImage: "linear-gradient(to bottom, transparent, black 8%, black 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent, black 8%, black 100%)",
          }}
        >
          {visible.map((message, index) => (
            <motion.div
              key={`${index}-${message.text.slice(0, 12)}`}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={message.role === "user" ? "flex justify-end" : "flex justify-start"}
            >
              <div
                className={
                  message.role === "user"
                    ? "max-w-[86%] rounded-2xl rounded-br-md bg-ink px-4 py-2.5 text-[13px] leading-relaxed text-paper"
                    : "max-w-[86%] rounded-2xl rounded-bl-md bg-sand px-4 py-2.5 text-[13px] leading-relaxed text-ink"
                }
              >
                {message.role === "user" && message.name && (
                  <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.1em] text-paper/50">
                    {message.name}
                  </p>
                )}
                {message.text}
              </div>
            </motion.div>
          ))}
          {typing && (
            <div className="flex justify-start">
              <div className="flex gap-1 rounded-2xl bg-sand px-4 py-3">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink/35" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink/35 [animation-delay:140ms]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink/35 [animation-delay:280ms]" />
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 border-t border-ink/8 px-5 py-3.5">
          <span className="text-[12px] text-ink/35">{content.placeholder}</span>
        </div>
      </div>

      <div className="absolute -bottom-5 left-5 hidden rounded-full border border-ink/10 bg-paper px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-ink/55 shadow-sm sm:flex">
        {content.badge}
      </div>
    </div>
  );
}
