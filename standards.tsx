import Link from 'next/link'
import { HardHat, Phone, Mail, MapPin } from 'lucide-react'
import { company } from '@/lib/company-data'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

const serviceLinks = [
  'Cleaning & Hygiene',
  'Gardening & Landscaping',
  'Building Materials',
  'Catering Services',
  'Tendering & Procurement',
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <HardHat className="size-5" />
              </span>
              <span className="font-heading text-base font-extrabold leading-tight">
                Tlou Tubatse
                <span className="block text-[10px] font-medium uppercase tracking-[0.18em] text-primary-foreground/70">
                  Construction &amp; Projects
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              A black-owned general trading company delivering reliable services
              across South Africa. We will do it right all the time.
            </p>
            <p className="mt-4 text-xs text-primary-foreground/50">
              Reg No: {company.regNo}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-accent">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-accent">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((l) => (
                <li
                  key={l}
                  className="text-sm text-primary-foreground/70"
                >
                  {l}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-accent">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{company.phones.join(' / ')}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{company.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{company.physicalAddress}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-primary-foreground/60 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {company.legalName}. All rights
            reserved.
          </p>
          <p>We will do it right all the time.</p>
        </div>
      </div>
    </footer>
  )
}
