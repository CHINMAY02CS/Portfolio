import ABOUTIMAGE from "@/assets/About.png";

export default function About() {
  return (
    <>
      <div className="md:px-16 px-4 lg:px-[168px] lg:py-16 mx-auto">
        <p className="mb-8 text-xl text-center text-cyan-400">
          Nice to meet you
        </p>
        <div className="w-full font-extrabold text-center opacity-90 text-7xl">
          <p className="mt-2">Hi there,</p>
          <p className="mt-4">I'm Chinmay Singh</p>
          <p className="max-w-3xl mx-auto my-16 text-2xl font-normal leading-loose text-center">
            I’m a Frontend Developer passionate about crafting fast, scalable,
            and intuitive user interfaces that blend performance with great
            design.
          </p>
        </div>
        <img
          src={ABOUTIMAGE}
          alt=""
          className="mx-auto scale-75 scale-x-100 rounded-lg"
        />
        <div className="flex flex-col max-w-3xl gap-20 mx-auto">
          <div>
            <p className="text-xl text-gray-600 text">Summary</p>
            <p className="text-5xl font-bold leading-snug">
              Engineering interfaces that connect performance and experience
            </p>
            <p className="mt-8 text-xl leading-loose opacity-85">
              Starting my journey as an intern and growing into a full-time
              frontend developer, I’ve worked extensively on critical modules
              like order management, KYC verification, pickup & manifest, and
              dashboard systems. At ShipGlobal, I’ve had the opportunity to
              shape entire UI modules from the ground up — from creating clean
              layouts and reusable components to integrating APIs, optimizing
              code, and improving load times using techniques like suspense and
              shimmer effects
            </p>
            <p className="mt-8 text-xl leading-loose opacity-85">
              Alongside development, I’ve also mentored frontend interns,
              conducted technical interviews, and maintained high code quality
              across projects through reusable patterns, Zod validation, and
              modern state management tools like Redux and Zustand.
            </p>
            <p className="mt-8 text-xl leading-loose opacity-85">
              Outside of work, I enjoy experimenting with side projects — like
              building an AI-powered expense tracker — to explore new
              frameworks, refine my skills, and stay aligned with emerging web
              technologies.
            </p>
          </div>
          <div>
            <p className="text-xl text-gray-600 text">Background Story</p>
            <p className="text-5xl font-bold leading-snug">
              Following growth through curiosity and code
            </p>
            <p className="mt-8 text-xl leading-loose opacity-85">
              I started my career with a strong curiosity for how interfaces
              work — how design meets function, and how performance shapes
              experience. Over time, that curiosity evolved into a clear
              purpose: to build reliable, maintainable, and scalable web
              products that people love using every day.
            </p>
            <p className="mt-8 text-xl leading-loose opacity-85">
              From small UI components to handling end-to-end frontend modules,
              every project has been a step forward in learning how great
              engineering and thoughtful design can come together to make
              meaningful digital experiences.
            </p>
          </div>
          <div>
            <p className="text-xl text-gray-600 text">Why Frontend?</p>
            <p className="text-5xl font-bold leading-snug">
              Making technology human through design and code
            </p>
            <p className="mt-8 text-xl leading-loose opacity-85">
              Frontend development gives me the unique space to turn logic into
              experience — to make technology approachable, fast, and enjoyable.
              It’s about bridging creativity and engineering to solve real-world
              problems in simple, elegant ways.
            </p>
            <p className="mt-8 text-xl leading-loose opacity-85">
              As the web keeps evolving, I aim to keep learning, experimenting,
              and pushing boundaries — creating products that are not just
              functional, but delightful and impactful.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
