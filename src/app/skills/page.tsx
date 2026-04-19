import Navbar from "../../components/navbar";

const skills = [
  {
    name: "Python",
    image: "/python.png",
    features: ["Data analysis using numpy and pandas", "Machine Learning using scikit-learn", "Frameworks for web development"],
  },
  {
    name: "React",
    image: "/react.png",
    features: ["Component-based UI development", "States and Effects management", "API integration"],
  },
  {
    name: "Next.js",
    image: "/next.png",
    features: ["Server Side Rendering", "SEO-friendly", "API Routes"],
  },
  {
    name: "Express.js",
    image: "/express.png",
    features: ["Backend JS", "Fast and REST APIs", "Event-driven"],
  },
  {
    name: "Git",
    image: "/git.png",
    features: ["Version Control", "Collaboration", "Branching"],
  },
  {
    name:"Angular",
    image: "/angular.png",
    features:["Component-Based Architecture","Two-Way Data Binding","Dependency Injection (DI)"],
  },
  {
    name:".NET Core",
    image: "dotnet.png",
    features:["WEB API","Entity Framework","Repository Patterns"],
  }
];

export default function Skills() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
          My Skills
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white border-2 border-cyan-900 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:scale-105 transform transition-all"
            >
              {/* Enlarged Skill Image */}
              <img
                src={skill.image}
                alt={skill.name}
                className="w-32 h-32 mb-4 object-contain"
              />

              {/* Skill Name */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {skill.name}
              </h3>

              {/* Skill Features */}
              <ul className="text-gray-700 text-sm space-y-1">
                {skill.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
