'use client';

import { useState } from "react";
import './navbar.css';
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">

        <h1 className="nav-title">Pranav Sthapit</h1>

        {/* Mobile menu button */}
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>

        {/* Nav items */}
        <ul className={`nav-items ${open ? "open" : ""}`}>
          <Link href="/" onClick={() => setOpen(false)}><li className="nav-item">Home</li></Link>
          <Link href="/about" onClick={() => setOpen(false)}><li className="nav-item">About</li></Link>
          <Link href="/skills" onClick={() => setOpen(false)}><li className="nav-item">Skills</li></Link>
          <Link href="/project" onClick={() => setOpen(false)}><li className="nav-item">Project</li></Link>
          <Link href="/resume" onClick={() => setOpen(false)}><li className="nav-item">Resume</li></Link>
          <Link href="/contact" onClick={() => setOpen(false)}><li className="nav-item">Contact</li></Link>
        </ul>

      </div>
    </header>
  );
}