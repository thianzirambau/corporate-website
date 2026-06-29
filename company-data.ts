'use client'

import { services } from '@/lib/company-data'
import { cn } from '@/lib/utils'
import { Reveal, RevealStagger, StaggerItem } from './reveal'

export function Services({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section id="services" className="bg-muted/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {!hideHeading && (
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Our Services
              </p>
              <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                A complete range of trading and facilities solutions
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                From cleaning and landscaping to supply, catering and procurement,
                we deliver dependable services across South Africa.
              </p>
            </div>
          </Reveal>
        )}

        <RevealStagger
          className={cn(
            'grid gap-6 sm:grid-cols-2 lg:grid-cols-3',
            hideHeading ? 'mt-0' : 'mt-14',
          )}
        >
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <div className="group h-full rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <s.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
