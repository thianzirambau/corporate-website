'use client'

import { Landmark, Building2, Briefcase, User } from 'lucide-react'
import { industries } from '@/lib/company-data'
import { Reveal, RevealStagger, StaggerItem } from './reveal'

const icons = [Landmark, Building2, Briefcase, User]

export function Industries() {
  return (
    <section className="bg-muted/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Industries We Serve
            </p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Trusted across the public and private sectors
            </h2>
          </div>
        </Reveal>

        <RevealStagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => {
            const Icon = icons[i % icons.length]
            return (
              <StaggerItem key={ind.title}>
                <div className="group h-full overflow-hidden rounded-2xl border border-border bg-card p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="size-7" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
                    {ind.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {ind.description}
                  </p>
                </div>
              </StaggerItem>
            )
          })}
        </RevealStagger>
      </div>
    </section>
  )
}
