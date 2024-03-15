export const metadata = {
    title: 'Privacy Policy - Kubespaces',
    description: 'Kubespaces Privacy Policy',
  }
  
  import HeroPrivacy from '@/components/hero-privacy'
  import Newsletter from '@/components/newsletter'
  
  export default function About() {
    return (
      <>
        <HeroPrivacy />
        <Newsletter />
      </>
    )
  }