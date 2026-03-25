import Navbar from "../../components/navbar";
import Link from "next/link";


const profile = {
  name: "Pranav Sthapit",
  title: "Aspiring AI Developer | Web & ML Enthusiast",
  location: "Kathmandu, Nepal",
  email: "pranavsthapit35@gmail.com",
};

const skills = [
  {
    category: "Languages",
    items: "Python, JavaScript, PHP, Java, HTML, CSS",
  },
  {
    category: "Frameworks",
    items: "React, Next.js, Angular, Express.js, Tailwind CSS",
  },
  {
    category: "Tools & DB",
    items: "MySQL, PostgreSQL, Git, GitHub, NumPy, Pandas",
  },
];

const projects = [
  {
    title: "Email with Spam Detection",
    description:
      "Developed a client-server email system to separate and block spam emails. Integrated multiple ML models to predict spam probability and added basic cryptography for message encryption/decryption.",
    link: "https://github.com/Pranav-Sthapit/Email-with-spam-detection",
    tech: "React.js, Django, SQLite, TailwindCSS, NumPy, Pandas",
  },
  {
    title: "Health and Fitness Prediction System",
    description:
      "Built a system to predict fitness level based on user metrics like weight, height, and activity/nutrition levels. Includes interactive questionnaires and ML calculations for personalized insights.",
    link: "https://fitness-predictor.vercel.app",
    github: [
      "https://github.com/Pranav-Sthapit/health_and_fitness_prediction"
    ],
    tech: "Angular, Express, PostgreSQL, Flask, NumPy, Pandas",
  },
  {
    title: "Online Freelancing Platform",
    description:
      "Created a client-server freelancing platform for job posting and hiring. Integrated demo online payments via eSewa and collaborated with team members for different modules.",
    github: [
      "https://github.com/KritanShahi/ecommerce_bca",
      "https://github.com/KritanShahi/ecommerce_bca_back"
    ],
    tech: "Next.js, Express, PostgreSQL",
  },
];

const education = [
  {
    degree: "Bachelor of Computer Application",
    institute: "National College of Computer Studies",
    duration: "2022 – Present",
  },
  {
    degree: "+2 in Management (Computer Science)",
    institute: "New Zenith English Model School",
    duration: "2020 – 2022",
  },
];


export default function Resume() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-900 px-4">
        <div className="max-w-4xl w-full p-6 md:p-12 bg-white rounded-xl shadow-sm">

          {/* Work in progress */}
          <p className="text-center text-2xl text-gray-500 mb-6">
            Work in progress
          </p>

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-4xl font-bold">{profile.name}</h1>
              <p className="text-blue-600 font-medium">{profile.title}</p>
              <p className="text-sm text-gray-600 mt-1">
                {profile.location} • {profile.email}
              </p>
            </div>

            {/* Download Button */}
            <a
              href="/resume.pdf"
              download
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-50 transition whitespace-nowrap"
            >
              Download Resume (PDF)
            </a>
          </div>

          {/* Profile */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b pb-1 mb-2 text-center">
              Profile
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              An ambitious computer science student with foundation of web development technologies like react, angular, express, postgres with understanding of ML models and their integration in web apps.
              Eager to build real-world solutions by developing and deploying ML models with web systems to create impactful applications.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b pb-1 mb-3 text-center">
              Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-center">
              {skills.map((skill) => (
                <div key={skill.category}>
                  <h3 className="font-semibold">{skill.category}</h3>
                  <p className="text-gray-700">{skill.items}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          {/* Projects */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold border-b pb-1 mb-3 text-center">
              Projects
            </h2>

            <div className="space-y-6 text-sm">
              {projects.map((project) => (
                <div key={project.title} className="border rounded-lg p-4 hover:shadow-md transition">
                  {/* Title */}
                  <h3 className="font-semibold text-lg">{project.title}</h3>

                  {/* Tech Stack */}
                  {project.tech && (
                    <p className="text-gray-500 text-sm italic mt-1">
                      Tech Stack: {project.tech}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-gray-700 mt-2">{project.description}</p>

                  {/* Live Link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline mt-2 block"
                    >
                      Live Demo
                    </a>
                  )}

                  {/* GitHub Links */}
                  {project.github && (
                    <div className="mt-1 space-x-2">
                      {project.github.map((link, i) => (
                        <a
                          key={i}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          GitHub {i + 1}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xl font-semibold border-b pb-1 mb-3 text-center">
              Education
            </h2>

            <div className="space-y-3 text-sm">
              {education.map((edu) => (
                <div key={edu.degree}>
                  <p className="font-semibold">{edu.degree}</p>
                  <p className="text-gray-700">
                    {edu.institute} ({edu.duration})
                  </p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  );

}
