

const Header = () => {
  return (
    <div className=" flex justify-center">
     <header className=" sm:fixed sm:top-[45px] sm:w-[1512px] sm:h-[48px] z-20 h-[230px]">
        <div className="container mx-auto py-4 flex items-center justify-between">
          <div className=" flex gap-20">
          <h1 className="text-2xl font-bold text-orange-700 ml-8">MEGA.news</h1>
          <div className=" space-x-6  p-1">
            <a href="#" className="hover:text-blue-500">Categories</a>
            <a href="#" className="hover:text-blue-500">Pages</a>
            <a href="#" className="hover:text-blue-500">Contact Us</a>
            <a href="#" className="hover:text-blue-500">About Us</a>
            </div>
          </div>
          <div className="relative w-72 bg-[#F5F5F5] p-1  border rounded-lg gap-[25px] px-5">
          <button className="">
            <svg xmlns="http://www.w3.org/2000/svg" className=" h-[18px] " viewBox="0 0 128 512">
        <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
      </svg>
            </button>
            <input
              type="text"
              placeholder="Search Anything"
              className=" bg-transparent outline-none h-full ml-5 text-[#3E3232BF] text-[12px] p-1"
            />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header