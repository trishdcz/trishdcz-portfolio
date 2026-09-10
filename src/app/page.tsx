import Image from "next/image";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Sidebar />

      <main className="md:ml-[344px]">

        {/* =========================
            HERO
        ========================== */}
        <section
          id="home"
          className="px-8 pb-16 pt-12 md:px-16 md:pt-16"
        >
          <div className="mx-auto max-w-[730px]">
            <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[280px_1fr] md:gap-8">

              {/* PHOTO */}
              <div className="flex h-[320px] w-[280px] items-start justify-center">
                <Image
                  src="/profile.png"
                  alt="Trisha Mae De la Cruz"
                  width={280}
                  height={320}
                  priority
                  className="h-[320px] w-[280px] object-contain object-top"
                />
              </div>

              {/* INTRO */}
              <div className="relative h-[320px]">

                {/* NAME + INTRO */}
                <div className="pt-4">
                  <h1 className="whitespace-nowrap text-[40px] font-medium leading-none tracking-[-0.045em] md:text-[44px]">
                    Trisha Mae De la Cruz
                  </h1>

                  <p className="mt-6 max-w-[420px] text-[14.5px] leading-6 text-neutral-500">
                    I&apos;m an aspiring front-end developer and QA enthusiast
                    with a background in Information Technology. I enjoy
                    building clean web experiences and testing digital
                    products.
                  </p>

                  <p className="mt-4 max-w-[420px] text-[14.5px] leading-6 text-neutral-500">
                    Right now, I&apos;m focused on learning, building, and
                    improving every day.
                  </p>
                </div>

                {/* SOCIAL LINKS */}
                <div className="absolute left-0 top-[245px] flex items-center gap-7 text-[13px] text-neutral-500">
                  <a
                    href="https://github.com/trishdcz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-neutral-900"
                  >
                    github ↗
                  </a>

                  <a
                    href="https://www.linkedin.com/in/trisha-mae-de-la-cruz-b9571a227/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-neutral-900"
                  >
                    linkedin ↗
                  </a>

                  <a
                    href="https://www.instagram.com/trishdcz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-neutral-900"
                  >
                    instagram ↗
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* =========================
            01 — PROJECTS
        ========================== */}
        <section
          id="projects"
          className="px-8 py-10 md:px-16"
        >
          <div className="mx-auto max-w-[730px]">

            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium tracking-tight">
                01 — Projects
              </h2>

              <a
                href="#projects"
                className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
              >
                ALL PROJECTS →
              </a>
            </div>

          </div>
        </section>

        {/* =========================
            02 — EXPERIENCE
        ========================== */}
        <section
          id="experience"
          className="px-8 py-10 md:px-16"
        >
          <div className="mx-auto max-w-[730px]">

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-medium tracking-tight">
                02 — Experience
              </h2>

              <a
                href="#experience"
                className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
              >
                FULL HISTORY →
              </a>
            </div>

            {/* EXPERIENCE ROW */}
            <div className="grid grid-cols-[90px_1fr_auto] items-center border-y border-neutral-200 py-4">

              <span className="text-sm text-neutral-400">
                2026
              </span>

              <span className="text-base font-medium">
                Business Support Associate
              </span>

              <span className="whitespace-nowrap text-right text-sm text-neutral-500">
                Sun Life Canada Philippines Inc., Phoenix Palm NBO
              </span>

            </div>

          </div>
        </section>

        {/* =========================
            STACK
        ========================== */}
        <section
          id="stack"
          className="px-8 py-10 md:px-16"
        >
          <div className="mx-auto max-w-[730px]">

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-medium tracking-tight">
                Stack
              </h2>

              <a
                href="#stack"
                className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
              >
                VIEW ALL →
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "JavaScript",
                "HTML",
                "CSS",
                "Tailwind CSS",
                "Git",
                "GitHub",
                "Figma",
                "Canva",
                ".NET MAUI",
                "C#",
              ].map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-neutral-200 px-3 py-2 text-sm text-neutral-500"
                >
                  {technology}
                </span>
              ))}
            </div>

          </div>
        </section>

        {/* =========================
            03 — CERTIFICATIONS
        ========================== */}
        <section
          id="certifications"
          className="px-8 py-10 md:px-16"
        >
          <div className="mx-auto max-w-[730px]">

            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium tracking-tight">
                03 — Certifications
              </h2>

              <a
                href="#certifications"
                className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
              >
                ALL CERTIFICATIONS →
              </a>
            </div>

          </div>
        </section>

        {/* =========================
            04 — RECOMMENDATIONS
        ========================== */}
        <section
          id="recommendations"
          className="px-8 py-10 md:px-16"
        >
          <div className="mx-auto max-w-[730px]">

            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium tracking-tight">
                04 — Recommendations
              </h2>

              <a
                href="#recommendations"
                className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
              >
                ALL RECOMMENDATIONS →
              </a>
            </div>

          </div>
        </section>

        {/* =========================
            05 — AFFILIATIONS
        ========================== */}
        <section
          id="affiliations"
          className="px-8 py-10 md:px-16"
        >
          <div className="mx-auto max-w-[730px]">

            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium tracking-tight">
                05 — Affiliations
              </h2>

              <a
                href="#affiliations"
                className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
              >
                ALL AFFILIATIONS →
              </a>
            </div>

          </div>
        </section>

        {/* =========================
            06 — GITHUB
            Hidden for now
        ========================== */}
        <section
          id="github"
          className="hidden px-8 py-10 md:px-16"
        >
          <div className="mx-auto max-w-[730px]">

            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium tracking-tight">
                06 — github
              </h2>

              <a
                href="https://github.com/trishdcz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
              >
                @trishdcz ↗
              </a>
            </div>

            <div className="mt-8 rounded-[20px] border border-dashed border-neutral-300 px-7 py-7">
              <div className="overflow-hidden">
                <img
                  src="https://gh-heat.anishroy.com/api/trishdcz/svg?transparent=true"
                  alt="GitHub contribution activity"
                  className="block w-full"
                />
              </div>
            </div>

          </div>
        </section>

        {/* =========================
            OUTSIDE THE IDE
        ========================== */}
        <section
          id="outside-the-ide"
          className="px-8 py-20 md:px-16"
        >
          <div className="mx-auto max-w-[730px]">

            <p className="text-sm text-neutral-400">
              Outside the IDE
            </p>

            <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">

              <div>
                <h2 className="text-4xl font-medium leading-tight tracking-tight md:text-5xl">
                  Life beyond the screen.
                </h2>
              </div>

              <div>
                <p className="leading-8 text-neutral-500">
                  When I step away from the tech world, I enjoy being
                  involved in community activities and volunteering for
                  nonprofit organizations. Community engagement gives me
                  the opportunity to connect with people, contribute to
                  meaningful causes, and experience perspectives beyond
                  technology.
                </p>

                <p className="mt-6 leading-8 text-neutral-500">
                  I also enjoy traveling and photography, which give me
                  opportunities to explore new places, capture moments,
                  and find inspiration outside of my usual environment.
                </p>

                <div className="mt-8 flex flex-wrap gap-2">
                  <span className="rounded-md border border-neutral-200 px-3 py-2 text-sm text-neutral-500">
                    Travel
                  </span>

                  <span className="rounded-md border border-neutral-200 px-3 py-2 text-sm text-neutral-500">
                    Photography
                  </span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================
            FOOTER
        ========================== */}
        <footer className="px-8 pb-16 md:px-16">
          <div className="mx-auto max-w-[730px] border-t border-neutral-200 pt-8">
            <p className="text-sm text-neutral-400">
              © {new Date().getFullYear()} Trisha Mae De la Cruz
            </p>
          </div>
        </footer>

      </main>
    </div>
  );
}