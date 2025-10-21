import ONE from "@/assets/ONE.png";
import TWO from "@/assets/TWO.png";
import THREE from "@/assets/THREE.png";
import { ReactNode } from "react";

export default function Skills() {
  return (
    <div className="min-h-screen gap-20 px-4 py-16 bg-orange-50 md:px-16 font-poppins lg:px-[168px] md:py-24">
      <p className="text-2xl font-extrabold text-center md:text-3xl lg:text-5xl mb-28 opacity-90">
        What can I do for You
      </p>
      <div className="flex flex-col items-center justify-between gap-y-16 gap-x-4 md:flex-row md:flex-wrap ">
        <SkillCard
          title="Frontend Development"
          descriptionOne="I build fast, responsive, and maintainable web applications using React, TypeScript, and modern tooling."
          descriptionTwo="My focus is on writing clean, modular code that scales effortlessly with growing product requirements."
          img={<CardOneImage />}
        />
        <SkillCard
          title="UI Architecture & Performance"
          descriptionOne=" I design efficient component structures and optimize rendering for a seamless user experience."
          descriptionTwo="From lazy loading to state management, every decision aims to enhance speed and reliability."
          img={<CardTwoImage />}
        />
        <SkillCard
          title="Collaboration & Code Quality"
          descriptionOne="I work closely with designers and backend teams to bring ideas to life with precision and consistency."
          descriptionTwo="Through mentorship, reviews, and reusable component patterns, I ensure codebases remain robust and future-ready."
          img={<CardThreeImage />}
        />
      </div>
    </div>
  );
}

function CardOneImage() {
  return (
    <div className="bg-black border-[4px] border-black rounded-lg h-16 w-24">
      <div className="relative flex items-center h-16 pl-2 bg-red-400 border border-black rounded-lg w-24 right-1.5 bottom-1.5 bg">
        <img src={ONE} alt="" loading="lazy" className="w-20 h-12" />
      </div>
    </div>
  );
}
function CardTwoImage() {
  return (
    <div className="bg-black border-[4px] border-black rounded-lg h-16 w-24">
      <div className="relative flex items-center h-16 bg-green-400 border border-black rounded-lg w-24 right-1.5 bottom-1.5 bg">
        <img src={TWO} alt="" loading="lazy" className="w-16 h-12 mx-auto" />
      </div>
    </div>
  );
}
function CardThreeImage() {
  return (
    <div className="bg-black border-[4px] border-black rounded-lg h-16 w-24">
      <div className="relative flex items-center h-16 bg-purple-400 border border-black rounded-lg w-24 right-1.5 bottom-1.5 bg">
        <img src={THREE} alt="" loading="lazy" className="w-16 h-12 mx-auto" />
      </div>
    </div>
  );
}

interface SkillCardProps {
  img: ReactNode;
  title: string;
  descriptionOne: string;
  descriptionTwo: string;
}

function SkillCard({
  img,
  title,
  descriptionTwo,
  descriptionOne,
}: SkillCardProps) {
  return (
    <div className="font-extrabold opacity-90 text-4xl md:text-[120px] grid gap-y-8 animate-easeIn">
      <div className="-mt-4 bg-black border-[4px] border-black shadow-lg rounded-3xl h-112 w-76 cursor-pointer">
        <div className="relative flex flex-col gap-4 p-8 px-6 bg-white border border-black rounded-3xl h-112 right-2.5 bottom-2 w-76 bg">
          {img}
          <p className="text-lg md:text-2xl">{title}</p>
          <p className="text-sm font-normal leading-relaxed">
            {descriptionOne}
          </p>
          <p className="text-sm font-normal leading-relaxed">
            {descriptionTwo}
          </p>
        </div>
      </div>
    </div>
  );
}
