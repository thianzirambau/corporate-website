'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, HardHat } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // On inner pages the navbar always sits on a solid background.
  const solid = scrolled || !isHome

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        solid
          ? 'border-b border-border/60 bg-background/85 backdrop-blur-md shadow-sm'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link
          href="/"
          className={cn(
            'flex items-center gap-2.5 font-heading text-base font-extrabold leading-tight tracking-tight transition-colors',
            solid ? 'text-foreground' : 'text-white',
          )}
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <HardHat className="size-5" />
          </span>
          <span className="hidden sm:flex flex-col">
            <span>Tlou Tubatse</span>
            <span
              className={cn(
                'text-[10px] font-medium uppercase tracking-[0.18em]',
                solid ? 'text-muted-foreground' : 'text-white/70',
              )}
            >
              Construction &amp; Projects
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active =
              l.href === '/' ? pathname === '/' : pathname.startsWith(l.href)
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-accent',
                  active
                    ? 'text-accent'
                    : solid
                      ? 'text-muted-foreground'
                      : 'text-white/80',
                )}
              >
                {l.label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className={cn(
              buttonVariants(),
              'bg-accent text-accent-foreground hover:bg-accent/90',
            )}
          >
            Request a Quote
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={cn('md:hidden', solid ? 'text-foreground' : 'text-white')}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => {
              const active =
                l.href === '/' ? pathname === '/' : pathname.startsWith(l.href)
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted',
                    active ? 'text-accent' : 'text-foreground',
                  )}
                >
                  {l.label}
                </Link>
              )
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={cn(
                buttonVariants(),
                'mt-2 bg-accent text-accent-foreground hover:bg-accent/90',
              )}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
