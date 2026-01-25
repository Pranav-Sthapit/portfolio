'use client';

import { useState } from "react";
import './navbar.css';  // Import the CSS file
import Link from "next/link";

export default function NavBar() {

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="nav-title">Pranav Sthapit</h1>
        <ul className="nav-items">
          <Link href="/"><li className="nav-item">Home</li></Link>
          <Link href="/about"><li className="nav-item">About</li></Link>
          <Link href="/skills"><li className="nav-item">Skills</li></Link>
          <Link href="/project"><li className="nav-item">Project</li></Link>
          <Link href="/resume"><li className="nav-item">Resume</li></Link>
          <Link href="/contact"><li className="nav-item">Contact</li></Link>
        </ul>
      </div>
    </header>
  );
}
