import Link from "next/link";
import Navbar from "../components/navbar";
import Image from "next/image";
import profilePic from "../../public/pranav.jpg"; // replace with your photo

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 text-gray-900 px-6 md:px-12 gap-12">
        
        {/* Left Section: Intro Text */}
        <div className="flex-1 text-center md:text-left max-w-xl space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold">
            Hi, I’m Pranav
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">
            Aspiring AI Developer | Web & ML Enthusiast
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            I currently make modern web applications and AI/ML projects that solve real-world problems.
            Always learning, always building.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              href="/resume"
              className="bg-gray-200 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-300 transition"
            >
              View CV
            </Link>
            <Link
              href="/contact"
              className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Section: Photo */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-64 h-64 md:w-72 md:h-72 relative rounded-full overflow-hidden border-4 border-blue-600 shadow-lg">
            <Image
              src={profilePic}
              alt="Pranav"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </main>
    </>
  );
}
