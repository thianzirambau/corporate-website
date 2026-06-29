'use client'

import { Phone, Mail, MapPin, Printer, User, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { company } from '@/lib/company-data'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

const cards = [
  {
    icon: User,
    label: 'Contact Person',
    lines: [company.contactPerson],
  },
  {
    icon: Phone,
    label: 'Call Us',
    lines: company.phones,
  },
  {
    icon: Mail,
    label: 'Email',
    lines: [company.email],
  },
  {
    icon: Printer,
    label: 'Fax',
    lines: [company.fax],
  },
]

export function Contact({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {!hideHeading && (
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Contact Us
              </p>
              <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                Get in touch for a quote
              </h2>
            </div>
          </Reveal>
        )}

        <div
          className={cn(
            'grid gap-8 lg:grid-cols-2',
            hideHeading ? 'mt-0' : 'mt-14',
          )}
        >
          <Reveal>
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {cards.map((c) => (
                  <div
                    key={c.label}
                    className="rounded-2xl border border-border bg-card p-5 shadow-sm"
                  >
                    <span className="flex size-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <c.icon className="size-5" />
                    </span>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </p>
                    {c.lines.map((line) => (
                      <p
                        key={line}
                        className="mt-0.5 text-sm font-medium text-foreground"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <MapPin className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Physical Address
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-foreground">
                      {company.physicalAddress}
                    </p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Postal Address
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-foreground">
                      {company.postalAddress}
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                <iframe
                  title="Tlou Tubatse location map"
                  className="h-56 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=Marapong%20Village%20Limpopo&t=&z=11&ie=UTF8&iwloc=&output=embed"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-3xl border border-border bg-card p-7 shadow-sm md:p-8"
            >
              <h3 className="font-heading text-xl font-bold text-foreground">
                Request a Quote
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill in your details and we&apos;ll be in touch.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Full name" id="name" placeholder="Your name" />
                <Field
                  label="Phone"
                  id="phone"
                  type="tel"
                  placeholder="Your number"
                />
              </div>
              <div className="mt-4">
                <Field
                  label="Email"
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
              <div className="mt-4">
                <Field label="Service needed" id="service" placeholder="e.g. Gardening services" />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your project"
                  className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Send Request
                <Send className="size-4" />
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  id,
  type = 'text',
  placeholder,
}: {
  label: string
  id: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </div>
  )
}
