export const metadata = {
    title: 'Consulting - Kubespaces',
    description: 'Consulting services - Kubespaces',
  }
  
  import Hero from '@/components/hero-features'
  import Consulting from '@/components/consulting'

  import Cta from '@/components/cta'
  
  export default function Features() {
    return (
      <>
        <Hero />
        <Consulting />
        <Cta />
      </>
    )
  }