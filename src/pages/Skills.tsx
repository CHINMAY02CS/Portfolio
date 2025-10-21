import ONE from "@/assets/ONE.png";
import TWO from "@/assets/TWO.png";
import THREE from "@/assets/THREE.png";

export default function Skills() {
  return (
    <div className="h-screen bg-orange-50 md:px-16 px-4 font-poppins lg:px-[168px] md:py-24 gap-20">
      <p className="text-5xl font-extrabold text-center mb-28 opacity-90">
        What can I do for You
      </p>
      <div className="flex flex-col items-center justify-between gap-20 lg:flex-row md:flex-col">
        <div className="font-extrabold opacity-90 text-4xl md:text-[120px] grid gap-y-8">
          <div className="-mt-4 bg-black border-[4px] border-black shadow-lg rounded-3xl h-112 w-76 cursor-pointer">
            <div className="relative flex flex-col gap-4 p-8 px-6 bg-white border border-black rounded-3xl h-112 right-2.5 bottom-2 w-76 bg">
              <CardOneImage />
              <p className="text-2xl">Frontend Development</p>
              <p className="text-sm font-normal leading-relaxed">
                I build fast, responsive, and maintainable web applications
                using React, TypeScript, and modern tooling.
              </p>
              <p className="text-sm font-normal leading-relaxed">
                My focus is on writing clean, modular code that scales
                effortlessly with growing product requirements.
              </p>
            </div>
          </div>
        </div>
        <div className="font-extrabold opacity-90 text-4xl md:text-[120px] grid gap-y-8">
          <div className="-mt-4 bg-black border-[4px] border-black shadow-lg rounded-3xl h-112 w-76 cursor-pointer">
            <div className="relative flex flex-col gap-4 p-8 px-6 bg-white border border-black rounded-3xl h-112 right-2.5 bottom-2 w-76 bg">
              <CardTwoImage />
              <p className="text-2xl">UI Architecture & Performance</p>
              <p className="text-sm font-normal leading-relaxed">
                I design efficient component structures and optimize rendering
                for a seamless user experience.
              </p>
              <p className="text-sm font-normal leading-relaxed">
                From lazy loading to state management, every decision aims to
                enhance speed and reliability.
              </p>
            </div>
          </div>
        </div>
        <div className="font-extrabold opacity-90 text-4xl md:text-[120px] grid gap-y-8">
          <div className="-mt-4 bg-black border-[4px] border-black shadow-lg rounded-3xl h-112 w-76 cursor-pointer">
            <div className="relative flex flex-col gap-4 p-8 px-6 bg-white border border-black rounded-3xl h-112 right-2.5 bottom-2 w-76 bg">
              <CardThreeImage />
              <p className="text-2xl">Collaboration & Code Quality</p>
              <p className="text-sm font-normal leading-relaxed">
                I work closely with designers and backend teams to bring ideas
                to life with precision and consistency.
              </p>
              <p className="text-sm font-normal leading-relaxed">
                Through mentorship, reviews, and reusable component patterns, I
                ensure codebases remain robust and future-ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardOneImage() {
  return (
    <div className="bg-black border-[4px] border-black rounded-lg h-16 w-24">
      <div className="relative flex items-center h-16 pl-2 bg-red-400 border border-black rounded-lg w-24 right-1.5 bottom-1.5 bg">
        <img src={ONE} alt="" className="w-20 h-12" />
      </div>
    </div>
  );
}
function CardTwoImage() {
  return (
    <div className="bg-black border-[4px] border-black rounded-lg h-16 w-24">
      <div className="relative flex items-center h-16 bg-green-400 border border-black rounded-lg w-24 right-1.5 bottom-1.5 bg">
        <img src={TWO} alt="" className="w-16 h-12 mx-auto" />
      </div>
    </div>
  );
}
function CardThreeImage() {
  return (
    <div className="bg-black border-[4px] border-black rounded-lg h-16 w-24">
      <div className="relative flex items-center h-16 bg-purple-400 border border-black rounded-lg w-24 right-1.5 bottom-1.5 bg">
        <img src={THREE} alt="" className="w-16 h-12 mx-auto" />
      </div>
    </div>
  );
}
