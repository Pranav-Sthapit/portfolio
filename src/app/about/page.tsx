import Navbar from '../../components/navbar';
import Image from 'next/image';
import profilePic from '../../../public/pranav.jpg';
import "./about.css";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="main-container">
        
        {/* Left Section: Intro + About */}
        <div className="left-section">
          <h1 className="title-primary">Hello, I’m Pranav,</h1>
          <h2 className="title-secondary">BCA 7th Semester</h2>

          <section className="about-section">
            <h3 className="about-heading">About</h3>
            <p className="about-text">
              I am a Computer Science student passionate about building web applications with AI & Machine Learning,
              and creating projects that solve real-world problems.
              I enjoy learning new technologies and improving my skills every day.
              Currently refining machine learning through various study of numpy and pandas as well as scikit learn. 
            </p>
          </section>

          {/* Skills/Experience Highlights */}
          <h3 className="about-heading">Major Highlights</h3>
          <div className="skills-grid">
            <div className="skill-card">
              <h4 className="skill-title">Node js</h4>
              <p className="skill-desc">Many projects using various libraries like react.js, next.js and express.js</p>
            </div>
            <div className="skill-card">
              <h4 className="skill-title">Python</h4>
              <p className="skill-desc">Use of python frameworks like Django rest framework for backend integration with ML models</p>
            </div>
            <div className="skill-card">
              <h4 className="skill-title">Machine Learning</h4>
              <p className="skill-desc">Machine learning models that solve real world problems whit 90+ accuracy</p>
            </div>
          </div>
        </div>

        {/* Right Section: Profile Image */}
        <div className="right-section">
          <div className="profile-wrapper">
            <Image src={profilePic} alt="Pranav" fill className="object-cover" />
          </div>
        </div>

      </main>
    </>
  );
}
