import "./about.css";
import TeamMember from "./TeamMember";
import { useSpring, animated } from "react-spring";
import SimpleCarousel from "simple-react-carousel";

const teamMembers = [
  {
    name: "Isabel",
    photo:
      "https://media-exp1.licdn.com/dms/image/C4D03AQEnrE8osXZM4Q/profile-displayphoto-shrink_400_400/0/1568148063945?e=1625702400&v=beta&t=02WqZMxtw2EI8B0_mmMv22_Oi2S4RB_c74tNWrl0GTA",
    description:
      "German former Project Manager, loving tech and everything that comes with it, Isa has chosen to dive deeper into coding and broaden her horizon since then.",
    gitHub: "",
    linkedIcon: "https://www.linkedin.com/in/isabelmehlmann/",
  },
  {
    name: "Guillaume",
    photo:
      "https://media-exp1.licdn.com/dms/image/C4D03AQFd32H3IO0JNg/profile-displayphoto-shrink_400_400/0/1614540617746?e=1625702400&v=beta&t=ie4P3ArUriFDE5qM8C25-DRx3YDl7b004MogKinVRsE",
    description:
      "Former Product Manager in the Insurance industry & father of 2 young sons teaching them about cultures and ways of life by traveling the world.",
    gitHub: "",
    linkedIcon: "https://www.linkedin.com/in/guillaumecojan/",
  },
  {
    name: "Lukas",
    photo:
      "https://media-exp1.licdn.com/dms/image/C5603AQFlXYSL_ic5aA/profile-displayphoto-shrink_800_800/0/1615720340726?e=1625702400&v=beta&t=rLmAyLSKvyJdod5bEcDQeBqXVZZQaiMUXg_HvsNRMkE",
    description:
      "Fantastic german photographer travels around the world to capture seconds with the amazing challenge of showing viewers full stories behind his images. ",
    gitHub: "https://github.com/lukaskreibig",
    linkedIcon: "https://www.linkedin.com/in/lukas-kreibig-0513ab208/",
  },
  {
    name: "Carmen",
    photo:
      "https://media-exp1.licdn.com/dms/image/C4D03AQF_mM3xUhIWPQ/profile-displayphoto-shrink_400_400/0/1558116558096?e=1625702400&v=beta&t=CtCb4PbBNyDeCmXnu_LjSYG0zOvK4bH11OPCk_F2dgM",
    description:
      "Former teacher so she thrives in sharing knowledge and knows it's crucial to practice it. Was born in Mexico lived in Canada and now adapting to Paris.",
    gitHub: "",
    linkedIcon: "https://www.linkedin.com/in/makarmeen/",
  },
];

const About = () => {
  const cardsAni = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 800,

    config: {
      duration: 1000, // duration for the whole animation form start to end
    },
  });

  const teamAni = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 300,

    config: {
      duration: 1000, // duration for the whole animation form start to end
    },
  });

  return (
    <>
      <div className="ourHistory">
        <animated.div style={teamAni}>
          <h1>Team Members</h1>
        </animated.div>
      </div>
      <animated.div style={cardsAni}>
        <div className="containerCards">
          {teamMembers.map((member) => (
            <TeamMember memberInfo={member} />
          ))}
        </div>
      </animated.div>
      <animated.div style={cardsAni}>
        <div className="containerCards-mobile">
          <SimpleCarousel>
            {teamMembers.map((member) => (
              <TeamMember memberInfo={member} />
            ))}
          </SimpleCarousel>
        </div>
      </animated.div>
    </>
  );
};

export default About;
