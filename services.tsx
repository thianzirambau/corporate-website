'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

export function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/cta-infrastructure.png"
          alt="Modern infrastructure at dusk with construction cranes"
          className="size-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-primary/85" />
      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center md:px-8 md:py-32">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-extrabold tracking-tight text-primary-foreground md:text-5xl">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-primary-foreground/80">
            Partner with a team committed to quality, reliability and getting it
            right all the time. Tell us about your project and we will get back to
            you with a quote.
          </p>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'group mt-9 bg-accent text-accent-foreground hover:bg-accent/90',
            )}
          >
            Request a Quote
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
