'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src="/images/hero-construction.png"
          alt="Construction site at golden hour with cranes and workers"
          className="size-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-32 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur-sm"
        >
          <ShieldCheck className="size-4 text-accent" />
          We will do it right all the time
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32 }}
          className="mt-6 max-w-3xl text-balance font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl"
        >
          Building Excellence.{' '}
          <span className="text-accent">Delivering Results.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.44 }}
          className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-white/85 md:text-xl"
        >
          Tlou Tubatse Construction &amp; Projects provides reliable construction
          support, cleaning services, procurement, landscaping, catering and
          supply solutions across South Africa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.56 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'group bg-accent text-accent-foreground hover:bg-accent/90',
            )}
          >
            Request a Quote
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/services"
            className={cn(
              buttonVariants({ size: 'lg', variant: 'outline' }),
              'border-white/40 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 hover:text-white',
            )}
          >
            View Services
          </Link>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-3"
        >
          {[
            { value: '10+', label: 'Years of Service' },
            { value: '12', label: 'Service Lines' },
            { value: '100%', label: 'Black Owned' },
          ].map((s) => (
            <div key={s.label}>
              <dt className="font-heading text-3xl font-extrabold text-white md:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm text-white/70">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
