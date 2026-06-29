'use client'

import { Building2, BadgeCheck } from 'lucide-react'
import { clients } from '@/lib/company-data'
import { cn } from '@/lib/utils'
import { Reveal, RevealStagger, StaggerItem } from './reveal'

export function Clients({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section id="clients" className="scroll-mt-20 bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {!hideHeading && (
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Our Clients
              </p>
              <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                Companies we have worked with
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                We are proud to have served government departments, municipalities,
                state-owned entities and private businesses across South Africa.
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
          {clients.map((c) => (
            <StaggerItem key={c.name}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Building2 className="size-6" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                    <BadgeCheck className="size-3.5" />
                    {c.sector}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                  {c.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </RevealStagger>

        <Reveal delay={0.1}>
          <div className="mt-14 rounded-3xl border border-border bg-muted/40 p-8 text-center md:p-10">
            <p className="text-pretty font-heading text-xl font-bold text-foreground md:text-2xl">
              Trusted by the public and private sector alike
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              From national government and municipalities to private companies, our
              clients return to us because we deliver quality, on time, all the time.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
