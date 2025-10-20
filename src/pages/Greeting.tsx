export default function Greeting() {
  return (
    <>
      <div className="h-[90vh] m-auto md:px-16 px-4 lg:px-[168px] lg:py-24 md:max-w-5xl mx-auto">
        <p>Nice to meet you</p>
        <p className="mt-2 text-5xl font-extrabold">I'm Chinmay Singh</p>
        <p className="mt-2">
          I work as a User Interface & User Experience designer.
        </p>
        <div className="grid opacity-90 gap-y-8">
          <div className="grid gap-6 mt-4 text-xl font-normal leading-normal text-black opacity-85">
            <p className="leading-relaxed">
              Currently, I’m designing a Global Trade Platform for Importer,
              Exporter, and Freight Forwarder associated with{" "}
              <span className="text-blue">ShipGlobal</span>. Previously, I was a
              UX designer at <span className="text-orange">NTPC</span>.
            </p>

            <p className="leading-relaxed">
              Outside of my full-time commitments, I work with a select
              freelance client base to create amazing products and solutions.
            </p>

            <p className="leading-relaxed">
              I’m passionate about building & designing delightful experiences
              with the combination of business, marketing and UX/UI design to
              make customers and users satisfied when they’re using products and
              services online.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
