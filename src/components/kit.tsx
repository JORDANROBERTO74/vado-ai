import type { HTMLAttributes, ReactNode } from "react";

function join(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

export function Container({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={join("mx-auto w-full max-w-[1180px] px-6 lg:px-10", className)} {...props}>
      {children}
    </div>
  );
}

export function Section({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <section className={join("relative", className)} {...props}>
      {children}
    </section>
  );
}

export function Eyebrow({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <p className={join("m-0 text-eyebrow font-medium uppercase text-clay", className)}>
      {children}
    </p>
  );
}

export function SectionTitle({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <h2 className={join("m-0 text-section font-medium text-balance text-ink", className)}>
      {children}
    </h2>
  );
}
