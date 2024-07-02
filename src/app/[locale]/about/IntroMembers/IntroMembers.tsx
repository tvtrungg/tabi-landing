import Image from "next/image";

type TIntroMember = {
  position: string;
  member: string;
  imgSrc: string;
};

type TIntroMembersProps = {
  data: {
    section1: TIntroMember[];
  };
};

function IntroMembers({ data }: TIntroMembersProps) {
  const { section1 } = data;

  return (
    <div id="about-team" className="max-w-screen-xl mx-auto py-28">
      <div className="team-wrapper flex justify-center">
        {section1.map((member, index) => (
          <div
            key={index}
            className={`icon-home ${index % 2 === 0 ? "odd" : "even"}`}
          >
            <Image
              src={member.imgSrc}
              alt="avatar"
              width={300}
              height={500}
              className="about-clip-path"
            />
            <div className="icon-mask"></div>
            <span className="after-effect"></span>
            <div
              className={`text-block pointer-events-none w-[250%] absolute top-10 ${
                index < 2 ? "left-[110%]" : ""
              } ${
                index > 2 ? "right-[100%]" : ""
              }  z-10 uppercase invisible opacity-0 hidden`}
            >
              <h2
                className={`text-white text-9xl ${
                  index === 2 ? "translate-x-[-70%]" : ""
                }`}
              >
                {member.position}
              </h2>
              <h5
                className={`text-white text-7xl tracking-[0.2em] ${
                  index === 2 ? "translate-x-[40%] translate-y-[300%]" : ""
                }`}
              >
                {member.member}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IntroMembers;
