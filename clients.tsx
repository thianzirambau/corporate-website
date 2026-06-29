import { Hero } from '@/components/site/hero'
import { About } from '@/components/site/about'
import { Services } from '@/components/site/services'
import { WhyChoose } from '@/components/site/why-choose'
import { Industries } from '@/components/site/industries'
import { CTA } from '@/components/site/cta'

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Industries />
      <CTA />
    </>
  )
}
