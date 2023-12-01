import { styles } from '../styles';
import Team from './Team';

import { SectionWrapper } from '../hoc';

const About = () => {
  return (
    <>
      <div className="">
        <h2 className={`${styles.sectionHeadText}`}>About Us.</h2>
        <p className={`${styles.sectionSubText}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quae optio consectetur necessitatibus sed commodi veniam sequi quaerat velit, illum, exercitationem quas pariatur hic voluptate fugit itaque beatae quia earum.</p>
      </div>
      <Team />
    </>
  )
}

export default SectionWrapper(About, 'about')