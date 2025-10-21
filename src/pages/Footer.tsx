export default function Footer() {
  return (
    <div className="bg-orange-50 md:px-16 px-4 font-poppins lg:px-[168px] md:py-24 gap-20">
      <p className="mb-16 font-extrabold text-center text-8xl opacity-90">
        Lets Work Together
      </p>
      <p className="mx-auto text-2xl leading-relaxed text-center max-w-160">
        If you’re looking to build reliable, performant, and visually polished
        web applications — I’d love to collaborate.
      </p>
      <div className="flex items-center justify-center mt-12 gap-x-16">
        <div
          className="bg-black border-[4px] border-black rounded-lg h-15 w-48 cursor-pointer"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1vFdIZOESwYcur72mXRp7WAn_1NkE4krV/view?usp=sharing",
              "_blank"
            )
          }
        >
          <div className="relative flex items-center w-48 px-8 border border-black rounded-lg h-14 bg-orange-50 hover:bg-orange right-2 bottom-1 bg">
            <span className="text-xl font-medium">View Resume</span>
          </div>
        </div>
        <div
          className="bg-black border-[4px] border-black rounded-lg h-15 w-52 cursor-pointer"
          onClick={() =>
            window.open("https://www.linkedin.com/in/chinmaycs/", "_blank")
          }
        >
          <div className="relative flex items-center px-8 bg-orange-100 border border-black rounded-lg w-52 h-14 hover:bg-orange right-2 bottom-1 bg">
            <span className="text-xl font-medium">LinkedIn Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
}
