import type { Metadata } from 'next'
import { PageHeader } from '@/components/site/page-header'
import { Contact } from '@/components/site/contact'

export const metadata: Metadata = {
  title: 'Contact Us | Tlou Tubatse Construction & Projects',
  description:
    'Get in touch with Tlou Tubatse Construction & Projects for a quote. Call, email or send us a message.',
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Get in touch for a quote"
        description="Tell us about your project and our team will get back to you with a tailored quote."
      />
      <Contact hideHeading />
    </>
  )
}
