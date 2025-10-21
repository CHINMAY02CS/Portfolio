import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 z-20 flex items-center justify-between w-full px-4 h-15 bg-orange-50 md:px-16 lg:px-44">
      <p className="text-xl font-medium animate-slideIntop">Chinmay</p>
      <div className="flex items-center tex-sm md:text-base gap-x-8 animate-slideIntop">
        <p
          className="cursor-pointer hover:text-gray-700"
          onClick={() => {
            navigate("/");
            scrollTo(0, 0);
          }}
        >
          Home
        </p>
        <p
          className="cursor-pointer hover:text-gray-700"
          onClick={() => {
            navigate("/projects");
            scrollTo(0, 0);
          }}
        >
          Projects
        </p>
        <p
          className="cursor-pointer hover:text-gray-700"
          onClick={() => {
            navigate("/about");
            scrollTo(0, 0);
          }}
        >
          About
        </p>
      </div>
    </div>
  );
}
