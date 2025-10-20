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
              <p className="text-2xl">Product Design for Businesses</p>
              <p className="text-sm font-normal leading-relaxed">
                I specialize in effective design for startups. I'll help you
                brainstorm, research, and run growth experiments to make a real
                impact on your business
              </p>
              <p className="text-sm font-normal leading-relaxed">
                I can help you to set up a streamlined design process and create
                visuals that not only drive growth but also deeply connect with
                your audience.
              </p>
            </div>
          </div>
        </div>
        <div className="font-extrabold opacity-90 text-4xl md:text-[120px] grid gap-y-8">
          <div className="-mt-4 bg-black border-[4px] border-black shadow-lg rounded-3xl h-112 w-76 cursor-pointer">
            <div className="relative flex flex-col gap-4 p-8 px-6 bg-white border border-black rounded-3xl h-112 right-2.5 bottom-2 w-76 bg">
              <CardTwoImage />
              <p className="text-2xl">Web & Mobile UI/UX Design</p>
              <p className="text-sm font-normal leading-relaxed">
                I design beautiful and effective mobile apps, websites, and
                e-commerce stores.
              </p>
              <p className="text-sm font-normal leading-relaxed">
                I use Figma for app and complex website designs, making
                developer handoffs seamless. For personal or small business
                sites, I can also bring your vision to life directly in Webflow
                or Framer
              </p>
            </div>
          </div>
        </div>
        <div className="font-extrabold opacity-90 text-4xl md:text-[120px] grid gap-y-8">
          <div className="-mt-4 bg-black border-[4px] border-black shadow-lg rounded-3xl h-112 w-76 cursor-pointer">
            <div className="relative flex flex-col gap-4 p-8 px-6 bg-white border border-black rounded-3xl h-112 right-2.5 bottom-2 w-76 bg">
              <CardThreeImage />
              <p className="text-2xl">Design Services and Motion Design</p>
              <p className="text-sm font-normal leading-relaxed">
                I help content creators build professional and authentic online
                presences.
              </p>
              <p className="text-sm font-normal leading-relaxed">
                From website design and branding to motion graphics, banners,
                and thumbnails, I'll ensure your digital identity truly shines.
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
      <div className="relative flex items-center h-16 px-8 bg-red-400 border border-black rounded-lg w-24 right-1.5 bottom-1.5 bg"></div>
    </div>
  );
}
function CardTwoImage() {
  return (
    <div className="bg-black border-[4px] border-black rounded-lg h-16 w-24">
      <div className="relative flex items-center h-16 px-8 bg-green border border-black rounded-lg w-24 right-1.5 bottom-1.5 bg"></div>
    </div>
  );
}
function CardThreeImage() {
  return (
    <div className="bg-black border-[4px] border-black rounded-lg h-16 w-24">
      <div className="relative flex items-center h-16 px-8 bg-purple border border-black rounded-lg w-24 right-1.5 bottom-1.5 bg"></div>
    </div>
  );
}
