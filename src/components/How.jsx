import { styles } from '../styles';

import { SectionWrapper } from '../hoc';

const How = () => {
  return (
    <>
      <div className="">
        <h2 className={`${styles.sectionHeadText}`}>How it works.</h2>
        <p className={`${styles.sectionSubText}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam quae optio consectetur necessitatibus sed commodi veniam sequi quaerat velit, illum, exercitationem quas pariatur hic voluptate fugit itaque beatae quia earum.</p>
      </div>
    </>
  )
}

export default SectionWrapper(How, 'how')