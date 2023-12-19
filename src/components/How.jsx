import { styles } from '../styles';

import { SectionWrapper } from '../hoc';

const How = () => {
  return (
    <>
      <div className="">
        <h2 className={`${styles.sectionHeadText} w-full text-center text-white`}>How it works.</h2>
        <div className={`${styles.paddingY}`}>
          <p className={`${styles.sectionSubText} text-white text-center`}>Focus on what matters: give your developers an unencumbered experience and a safe environment to deploy their applications, from testing to production.<p></p> Sign up and be on your way to deploy and manage applications at scale.</p>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(How, 'how')