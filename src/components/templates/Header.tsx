export default function Header() {
  return (
    <div className="fixed top-0 z-20 flex items-center justify-between w-full px-4 h-15 bg-orange-50 md:px-16 lg:px-44">
      <p className="text-xl font-medium">Chinmay</p>
      <div className="flex items-center text-base gap-x-8">
        <p className="cursor-pointer hover:text-gray-700">Home</p>
        <p>Project</p>
        <p>About</p>
      </div>
    </div>
  );
}
