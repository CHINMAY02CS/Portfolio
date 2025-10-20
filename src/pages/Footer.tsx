export default function Footer() {
  return (
    <div className="bg-orange-50 md:px-16 px-4 font-poppins lg:px-[168px] md:py-24 gap-20">
      <p className="mb-16 font-extrabold text-center text-8xl opacity-90">
        Lets Work Together
      </p>
      <p className="mx-auto text-2xl leading-relaxed text-center max-w-160">
        If you have a website or mobile app idea in mind or you need some advice
        about product design or you want to hire me for your organization, feel
        free to contact me
      </p>
      <div className="flex items-center justify-center mt-12 gap-x-16">
        <div className="bg-black border-[4px] border-black rounded-lg h-15 w-52 cursor-pointer">
          <div className="relative flex items-center px-8 border border-black rounded-lg h-14 w-52 bg-orange-50 hover:bg-orange right-2 bottom-1 bg">
            <span className="text-xl font-medium">View Resume</span>
          </div>
        </div>
        <div className="bg-black border-[4px] border-black rounded-lg h-15 w-52 cursor-pointer">
          <div className="relative flex items-center px-8 bg-orange-100 border border-black rounded-lg h-14 w-52 hover:bg-orange right-2 bottom-1 bg">
            <span className="text-xl font-medium">LinkedIn Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
}
