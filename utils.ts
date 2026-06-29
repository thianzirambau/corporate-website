'use client'

import { Check } from 'lucide-react'
import { standards } from '@/lib/company-data'
import { Reveal } from './reveal'

export function Standards() {
  return (
    <section id="standards" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Our Standards
            </p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              The way we work, on every single project
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              We adhere to a clear set of service standards that protect quality,
              timelines and safety — so you always know exactly what to expect
              when you work with us.
            </p>
          </Reveal>

          <div className="relative">
            <span className="absolute left-[15px] top-2 bottom-2 hidden w-px bg-border sm:block" />
            <ol className="space-y-4">
              {standards.map((s, i) => (
                <Reveal key={s} delay={i * 0.06}>
                  <li className="relative flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
                    <span className="z-10 flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Check className="size-4" strokeWidth={3} />
                    </span>
                    <p className="pt-1 text-sm font-medium leading-relaxed text-foreground">
                      {s}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
