type skillDetails = {
  skill: string;
  level: string;
  color: string;
};

const skills: skillDetails[] = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
  {
    skill: "Nodejs",
    level: "Advanced",
    color: "#FF3B00",
  },
];

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Olayinka Emmanuel Olumuyiwa</h1>
      <p>
        Backend Software Engineer. When not coding or learning a new technology,
        I like to play video games, watch Anima or just browse the web.
      </p>
    </div>
  );
}

function Avatar() {
  return (
    <img className="avatar" src="../public/profile3.jpg" alt="profile pic" />
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {" "}
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
          key={skill.skill}
        />
      ))}
    </div>
  );
}

interface skillProps {
  skill: string;
  color: string;
  level: string;
}

function Skill({ skill, color, level }: skillProps) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span> {skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}
