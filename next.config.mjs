'use client'

import {
  Gem,
  ShieldCheck,
  Repeat,
  Sprout,
  Lightbulb,
  Users,
  BadgeCheck,
  type LucideIcon,
} from 'lucide-react'
import { values } from '@/lib/company-data'
import { Reveal, RevealStagger, StaggerItem } from './reveal'

const icons: LucideIcon[] = [
  Gem,
  ShieldCheck,
  Repeat,
  Sprout,
  Lightbulb,
  Users,
  BadgeCheck,
]

export function Values() {
  return (
    <section className="bg-muted/40 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              Company Values
            </p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              The principles that guide everything we do
            </h2>
          </div>
        </Reveal>

        <RevealStagger className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => {
            const Icon = icons[i % icons.length]
            return (
              <StaggerItem key={v}>
                <div className="flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-heading text-base font-bold text-foreground">
                    {v}
                  </span>
                </div>
              </StaggerItem>
            )
          })}
        </RevealStagger>
      </div>
    </section>
  )
}
