export const metadata = {
  title: 'Mission',
  description: 'Our Mission',
}

import HeroMission from '@/components/hero-mission'
import TeamImages from '@/components/team-images'
import Timeline from '@/components/timeline'
import Newsletter from '@/components/newsletter'

export default function Mission() {
  return (
    <>
      <HeroMission />
      <TeamImages />
      <Newsletter />
    </>
  )
}