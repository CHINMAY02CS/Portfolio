import HERO from "@/assets/Hero.png";

export default function Dashboard() {
  return (
    <>
      <div className="-mt-8 h-screen bg-orange-50 md:px-16 px-4 lg:px-[168px] flex flex-col lg:flex-row items-center gap-20">
        <div className="font-extrabold opacity-90 text-4xl md:text-[120px] grid gap-y-8">
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
          <div
            className="bg-black border-[4px] border-black rounded-lg h-[52px] w-48 cursor-pointer"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1-laG-HJgWTzmM7_bqLNtqdte122XGjhd/view?usp=sharing",
                "_blank"
              )
            }
          >
            <div className="relative flex items-center w-48 h-12 px-8 bg-orange-100 border border-black rounded-lg hover:bg-orange right-2 bottom-1 bg">
              <span className="text-xl font-medium">View Resume</span>
            </div>
          </div>
        </div>
        <div className="-mt-8 bg-black border-2 border-black rounded-3xl size-88">
          <div className="relative flex items-center right-2 border border-black bottom-2 size-[348px] bg bg-red-400 rounded-3xl">
            <img src={HERO} className="relative bottom-3" />
          </div>
        </div>
      </div>
    </>
  );
}
