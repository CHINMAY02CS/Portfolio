import HERO from "@/assets/Hero.png";
import { NavigateButton } from "./Footer";

export default function Dashboard() {
  return (
    <>
      <div className="mt-12 lg:-mt-8 min-h-screen bg-orange-50 md:px-16 px-4 py-8 lg:px-[168px] flex flex-col-reverse lg:flex-row items-center gap-20">
        <div className="font-extrabold opacity-90 text-4xl md:text-6xl lg:text-[120px] grid gap-y-8">
          <div className="leading-tight">
            <p className="">Hello,</p>
            <p>I'm Chinmay</p>
          </div>
          <p className="-mt-4 text-xl font-normal leading-normal text-black opacity-85">
            Frontend Engineer passionate about crafting fast, scalable, and
            functional web applications. Currently crafting frontend experiences
            at <span className="text-blue">ShipGlobal</span>, previously at{" "}
            <span className="text-orange">NTPC</span>.
          </p>

          <NavigateButton
            url="https://drive.google.com/file/d/1-laG-HJgWTzmM7_bqLNtqdte122XGjhd/view?usp=sharing"
            label="View Resume"
            className="bg-orange-100 hover:bg-orange"
          />
        </div>
        <div className="mt-20 bg-black border-2 border-black lg:-mt-8 rounded-3xl size-48 md:size-60 lg:size-88">
          <div className="relative flex items-center bg-red-400 border border-black size-48 md:size-60 lg:size-88 right-2 bottom-2 bg rounded-3xl">
            <img src={HERO} />
          </div>
        </div>
      </div>
    </>
  );
}
