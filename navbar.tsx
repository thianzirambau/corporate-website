'use client'

import { Target, Eye, HeartHandshake } from 'lucide-react'
import { Reveal } from './reveal'

const pillars = [
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'To be a leading general trading service provider of excellence within Southern Africa and abroad.',
  },
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To provide quality, reliable and affordable general trading services through creative and innovative methods, while empowering young South Africans through job creation and skills development.',
  },
  {
    icon: HeartHandshake,
    title: 'Our Commitment',
    text: 'Supplying quality products and excellent services, and meeting every customer need timeously.',
  },
]

export function About({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="/images/about-team.png"
                  alt="Tlou Tubatse construction and facilities team reviewing plans on site"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-primary p-6 text-primary-foreground shadow-lg sm:block md:-right-6">
                <p className="font-heading text-3xl font-extrabold text-accent">
                  SMME
                </p>
                <p className="mt-1 max-w-[12rem] text-sm text-primary-foreground/80">
                  Black-owned, driven to grow South African enterprise
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              {!hideHeading && (
                <>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                    About Us
                  </p>
                  <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                    A black-owned trading company built to empower communities
                  </h2>
                </>
              )}
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                Tlou Tubatse Construction and Projects (Pty) Ltd is a black-owned
                general trading company structured to nurture SMME objectives. We
                create job opportunities where we operate and contribute to
                development by building wealth and improving the well-being of the
                communities we serve.
              </p>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                By ploughing resources back into the community and offering
                opportunities to previously disadvantaged individuals, we foster a
                vibrant economic atmosphere as one of the leading providers of
                excellent services.
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <p.icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-bold text-foreground">
                        {p.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {p.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
