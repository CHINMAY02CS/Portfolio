import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <div className="bg-orange-50 md:px-16 px-4 font-poppins lg:px-[168px] py-16 md:py-24 gap-20">
      <p className="mb-10 text-4xl font-extrabold text-center md:mb-16 md:text-6xl lg:text-8xl opacity-90">
        Lets Work Together
      </p>
      <p className="mx-auto text-lg leading-relaxed text-center md:text-2xl max-w-160">
        If you’re looking to build reliable, performant, and visually polished
        web applications — I’d love to collaborate.
      </p>
      <div className="flex flex-col items-center justify-center gap-16 mt-12 gap-y-8 md:flex-row">
        <NavigateButton
          url="https://drive.google.com/file/d/1-laG-HJgWTzmM7_bqLNtqdte122XGjhd/view?usp=sharing"
          label="View Resume"
        />
        <NavigateButton
          url="https://www.linkedin.com/in/chinmaycs/"
          parentClassName="w-52"
          label=" LinkedIn Profile"
          className="bg-orange-100 hover:bg-orange w-52"
        />
      </div>
    </div>
  );
}

interface NavigateButtonProps {
  parentClassName?: string;
  url: string;
  label: string;
  className?: string;
}

export function NavigateButton({
  url,
  label,
  className = "",
  parentClassName = "",
}: NavigateButtonProps) {
  return (
    <div
      className={cn(
        "bg-black border-[4px] border-black rounded-lg h-10 lg:h-15 w-40 lg:w-48 cursor-pointer",
        parentClassName
      )}
      onClick={() => window.open(url, "_blank")}
    >
      <div
        className={cn(
          "relative flex items-center w-40 lg:w-48 border border-black rounded-lg h-9 lg:h-14 bg-orange-50 hover:bg-orange right-2 bottom-1 bg",
          className
        )}
      >
        <span className="w-full text-base font-medium text-center md:text-xl">
          {label}
        </span>
      </div>
    </div>
  );
}
