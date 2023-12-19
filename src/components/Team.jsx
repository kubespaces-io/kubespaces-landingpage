import { styles } from "../styles";
import { team } from "../constants";

const TeamCard = ({ name, description, title, image }) => (
  <div className="bg-white rounded-xl overflow-hidden border-2 border-grey-100 shadow-md">
    <div className="w-full">
      <img
        src={image}
        alt={`feedback by ${name}`}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4">
      <div className="mt-4 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-primary font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">{title}</p>
        </div>
      </div>
      <div className="mt-1">
        <p className={`text-[#bbb] mt-4 font-normal text-[14px]`}>{description}</p>
      </div>
    </div>
  </div>


)

const Team = () => {
  return (
    <div className="mt-12">
      <h2 className={`${styles.heroSubText} text-primary text-bold uppercase`}>Who we are.</h2>
      <p className={`${styles.sectionSubText} mt-4 font-normal`}>We think devlopers should be free from the chains of infrastructure and focus on what matters: their code. We want to simplify the developer experience of adopting cloud native technologies by providing a seamless, turn-key solution that allows developers to focus on their code and not the infrastructure. We believe that the future of cloud native is serverless and we want to help you get there.</p>
      <div className={`${styles.paddingX} grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 mt-12`}>
        {team.map((user, index) => (
          <TeamCard
            key={index}
            index={index}
            {...user}
          />
        ))}
      </div>
    </div>
  )
}

export default Team