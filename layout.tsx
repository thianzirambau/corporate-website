import type { Metadata } from 'next'
import { PageHeader } from '@/components/site/page-header'
import { About } from '@/components/site/about'
import { Standards } from '@/components/site/standards'
import { Values } from '@/components/site/values'
import { CTA } from '@/components/site/cta'

export const metadata: Metadata = {
  title: 'About Us | Tlou Tubatse Construction & Projects',
  description:
    'Learn about Tlou Tubatse Construction & Projects, a black-owned general trading company empowering communities across South Africa.',
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A black-owned trading company built to empower communities"
        description="Discover who we are, the standards we hold ourselves to, and the values that drive everything we do."
      />
      <About hideHeading />
      <Standards />
      <Values />
      <CTA />
    </>
  )
}
