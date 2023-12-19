import { styles } from '../styles';
import Team from './Team';

import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      <div className="">
        <h2 className={`${styles.sectionHeadText}`}>About Us.</h2>
        <p className={`${styles.sectionSubText}`}>Kubespaces is a Namespace-as-a-service platform for developers, engineers and organizations that want to reap the benefit of container orchestration without the burden of servers and clusters around it.</p>
      </div>
      <Team />
    </>
  )
}

export default SectionWrapper(About, 'about')