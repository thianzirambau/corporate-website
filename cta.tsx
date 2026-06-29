import type { Metadata } from 'next'
import { PageHeader } from '@/components/site/page-header'
import { Services } from '@/components/site/services'
import { WhyChoose } from '@/components/site/why-choose'
import { Industries } from '@/components/site/industries'
import { Clients } from '@/components/site/clients'
import { CTA } from '@/components/site/cta'

export const metadata: Metadata = {
  title: 'Our Services | Tlou Tubatse Construction & Projects',
  description:
    'A complete range of trading and facilities solutions — cleaning, gardening, supply, catering, procurement and professional project support across South Africa.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="A complete range of trading and facilities solutions"
        description="From cleaning and landscaping to supply, catering and procurement, we deliver dependable services across South Africa."
      />
      <Services hideHeading />
      <WhyChoose />
      <Industries />
      <Clients />
      <CTA />
    </>
  )
}
