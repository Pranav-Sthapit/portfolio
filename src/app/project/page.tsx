import Navbar from "../../components/navbar";
import Image from "next/image";

const projects = [
  {
    name: "Email with Spam Detection",
    image: "/email.png",
    description: "A full-stack email application with spam mail seperation and blocking.",
    tools: ["react.js", "Django", "Python", "SQLite"],
    url: "https://github.com/Pranav-sthapit/email-with-spam-detection",
  },
  {
    name: "Physical health and fitness prediction",
    image: "/fitness.png",
    description: "A physical health/fitness prediction system for general public designed to calculate fitness score and provide recommendations.",
    tools: ["Angularjs", "Express", "Python", "Postgres","Flask"],
    url: "https://fitness-predictor.vercel.app/",
  },
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">
          My Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white border-2 border-cyan-900 rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:scale-105 transform transition-all relative overflow-hidden group"
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.name}
                width={500}
                height={120}
                className="mb-4 object-contain rounded"
              />

              {/* Project Name */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.name}
              </h3>

              {/* Project Description */}
              <p className="text-gray-700 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>

                <br/>
              {/* Project URL */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
              >
                Visit Project
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
