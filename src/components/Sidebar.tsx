"use client";

import { useState } from "react";

const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Organizations", href: "#organizations" },
];

export default function Sidebar() {
  const [muted, setMuted] = useState(false);

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-[280px] flex-col overflow-hidden border-r border-neutral-200 bg-white px-7 py-8">

      {/* HOME / LOGO */}
      <a
        href="#home"
        className="w-fit text-3xl font-medium tracking-tight text-neutral-900"
        aria-label="Home"
      >
        Trish
      </a>

      {/* MAIN NAVIGATION */}
      <nav className="mt-9 flex flex-col gap-2.5">
        {navigation.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block text-[15px] text-neutral-500 transition-colors duration-200 hover:text-neutral-900"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* SECONDARY NAVIGATION */}
      <div className="mt-6 border-t border-neutral-200 pt-5">
        <a
          href="#ask"
          className="block py-1.5 text-[15px] text-neutral-500 transition-colors hover:text-neutral-900"
        >
          Ask anything
        </a>

        <a
          href="#typing-test"
          className="block py-1.5 text-[15px] text-neutral-500 transition-colors hover:text-neutral-900"
        >
          Typing test
        </a>
      </div>

      {/* VIEWERS */}
      <div className="mt-5 border-t border-neutral-200 pt-5">
        <p className="text-xs text-neutral-400">
          () people viewing now
        </p>
      </div>

      {/* CONTROLS */}
      <div className="mt-4 flex items-center gap-2">

        {/* LIGHT MODE */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-sm text-neutral-600 transition hover:border-neutral-900 hover:text-neutral-900"
          aria-label="Light mode"
        >
          ☼
        </button>

        {/* DARK MODE */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-sm text-neutral-600 transition hover:border-neutral-900 hover:text-neutral-900"
          aria-label="Dark mode"
        >
          ◐
        </button>

        {/* MUTE */}
        <button
          type="button"
          onClick={() => setMuted(!muted)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-sm text-neutral-600 transition hover:border-neutral-900 hover:text-neutral-900"
          aria-label={muted ? "Unmute" : "Mute"}
        >
          {muted ? "×" : "♪"}
        </button>
      </div>

      {/* CONTACT */}
      <div className="mt-4 border-t border-neutral-200 pt-5">
        <p className="text-xs leading-5 text-neutral-400">
          For work, collabs &amp; everything else,
          <br />
          reach me at
        </p>

        <a
          href="mailto:trishdlcz@gmail.com"
          className="mt-2 flex items-center gap-2 text-sm text-neutral-900 transition-opacity hover:opacity-60"
        >
          <span aria-hidden="true">✉</span>
          <span>trishdlcz@gmail.com</span>
        </a>
      </div>

    </aside>
  );
}