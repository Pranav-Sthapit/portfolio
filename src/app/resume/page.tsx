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
    title: "Email Spam Detection System",
    description:
      "Full-stack email system with ML-based spam detection using React, Django, NumPy, and Pandas. Includes encryption and multiple ML models.",
    link: "https://github.com/Pranav-Sthapit/Email-with-spam-detection",
  },
  {
    title: "Online Banking Application",
    description:
      "Client-server banking system supporting CRUD operations using PHP, MySQL, HTML, CSS, and JavaScript.",
    link: null,
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
            Computer Science student with a strong foundation in web development
            and machine learning. Experienced in building full-stack applications
            and integrating ML models to solve real-world problems. Passionate
            about continuous learning and practical implementation.
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
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b pb-1 mb-3 text-center">
            Projects
          </h2>

          <div className="space-y-4 text-sm">
            {projects.map((project) => (
              <div key={project.title}>
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub Repository
                  </a>
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
