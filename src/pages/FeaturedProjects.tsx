import VENDOR from "@/assets/Vendor.png";
import FRANCHISE from "@/assets/Franchise.png";
import SHIPLOGO from "@/assets/ShipGlobalLogo.png";

export default function FeaturedProjects() {
  return (
    <>
      <div className="md:px-16 px-4 lg:px-[168px] lg:py-24 mx-auto">
        <p className="mt-2 text-5xl font-extrabold text-center">
          Featured Projects
        </p>
        <div className="flex flex-row items-center mt-20 mb-52 gap-14 md:grid-cols-2">
          <img src={VENDOR} alt="" className="h-76 w-136" />
          <div className="flex flex-col max-w-lg gap-4 text-base font-light leading-relaxed">
            <img src={SHIPLOGO} alt="" className="w-40 h-6" />
            <p className="text-3xl font-medium">
              Redesign of ShipGlobal Portal for e-commerce exporters
            </p>
            <p className="text-lg">
              A user-centric design that resulted in a 60% reduction in support
              tickets, demonstrating a significant improvement in vendor
              satisfaction and operational cost savings
            </p>
            <p className="font-medium underline hover:text-xl">View</p>
          </div>
        </div>
        <div className="flex flex-row items-center mt-52 mb-36 gap-14 md:grid-cols-2">
          <div className="flex flex-col max-w-lg gap-4 text-base font-light leading-relaxed">
            <img src={SHIPLOGO} alt="" className="w-40 h-6" />
            <p className="text-3xl font-medium">
              Redesign of ShipGlobal Portal for e-commerce exporters
            </p>
            <p className="text-lg">
              A user-centric design that resulted in a 60% reduction in support
              tickets, demonstrating a significant improvement in vendor
              satisfaction and operational cost savings
            </p>
            <p className="font-medium underline hover:text-xl">View</p>
          </div>
          <img src={FRANCHISE} alt="" className="h-76 w-136" />
        </div>
        <p className="mt-2 text-5xl font-extrabold text-center">
          Other Projects
          <div className="grid gap-16 mt-24 gap-y-32 md:grid-cols-2">
            <div className="flex flex-col gap-6 md:grid-cols-2">
              <img src={FRANCHISE} alt="" className="h-76 w-136" />
              <div className="flex flex-col max-w-lg gap-4 text-base font-light leading-relaxed text-left">
                <p className="text-2xl font-medium">
                  ShipGlobal Portal for e-commerce exporters
                </p>
                <p className="text-lg">
                  A user-centric design that resulted in a 60% reduction in
                  support tickets, demonstrating a significant improvement in
                  vendor satisfaction and operational cost savings
                </p>
                <p className="font-medium underline hover:text-xl">View</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 md:grid-cols-2">
              <img src={FRANCHISE} alt="" className="h-76 w-136" />
              <div className="flex flex-col max-w-lg gap-4 text-base font-light leading-relaxed text-left">
                <p className="text-2xl font-medium">
                  ShipGlobal Portal for e-commerce exporters
                </p>
                <p className="text-lg">
                  A user-centric design that resulted in a 60% reduction in
                  support tickets, demonstrating a significant improvement in
                  vendor satisfaction and operational cost savings
                </p>
                <p className="font-medium underline hover:text-xl">View</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 md:grid-cols-2">
              <img src={FRANCHISE} alt="" className="h-76 w-136" />
              <div className="flex flex-col max-w-lg gap-4 text-base font-light leading-relaxed text-left">
                <p className="text-2xl font-medium">
                  ShipGlobal Portal for e-commerce exporters
                </p>
                <p className="text-lg">
                  A user-centric design that resulted in a 60% reduction in
                  support tickets, demonstrating a significant improvement in
                  vendor satisfaction and operational cost savings
                </p>
                <p className="font-medium underline hover:text-xl">View</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 md:grid-cols-2">
              <img src={FRANCHISE} alt="" className="h-76 w-136" />
              <div className="flex flex-col max-w-lg gap-4 text-base font-light leading-relaxed text-left">
                <p className="text-2xl font-medium">
                  ShipGlobal Portal for e-commerce exporters
                </p>
                <p className="text-lg">
                  A user-centric design that resulted in a 60% reduction in
                  support tickets, demonstrating a significant improvement in
                  vendor satisfaction and operational cost savings
                </p>
                <p className="font-medium underline hover:text-xl">View</p>
              </div>
            </div>
          </div>
        </p>
      </div>
    </>
  );
}
