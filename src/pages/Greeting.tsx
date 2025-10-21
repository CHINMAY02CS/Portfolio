export default function Greeting() {
  return (
    <>
      <div className="flex items-center min-h-screen">
        <div className="md:px-16 px-14 lg:px-[168px] py-16 lg:py-24 md:max-w-5xl mx-auto">
          <p>Nice to meet you</p>
          <p className="mt-2 text-2xl font-extrabold md:text-3xl lg:text-5xl">
            I'm Chinmay Singh
          </p>
          {/* <p className="mt-2">I work as a Frontend Developer ( SDE I ).</p> */}
          <div className="grid opacity-90 gap-y-8">
            <div className="grid gap-6 mt-4 text-xl font-normal leading-normal text-black opacity-85">
              <p className="leading-relaxed">
                I’m a Frontend Developer who enjoys developing responsive,
                efficient, and accessible web applications. At{" "}
                <span className="text-blue">ShipGlobal</span>, I work on
                large-scale, business-critical modules used by thousands of
                exporters, vendors, and franchise users.
              </p>
              <p>
                My focus is on creating reusable UI components, optimizing
                performance, and ensuring smooth integration with backend APIs.
                Currently, I'm designing a Global Trade Platform for Importer,
                Exporter, and Freight Forwarder associated with{" "}
                <span className="text-blue">ShipGlobal</span>. Previously, I was
                an IT Intern at <span className="text-orange">NTPC</span>
              </p>
              <p className="leading-relaxed">
                I believe good frontend engineering lies at the intersection of
                design precision, code efficiency, and real-world usability.
              </p>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
