import Box from "./box"


const MobileHeader = () => {
  return (
    <div className=" w-full flex   flex-col items-center  bg-black  max-w-[450px] relative "> 
    <div className=" h-[48px]  max-w-[350px] w-full  mt-[45px] flex  gap-[10px]">
      <div className=" w-[48px] border-2 rounded-lg " ></div>
      <div className=" w-[300px] border-2 rounded-lg"></div>
    </div>
    <Box tittle={"Popular Post"} name={"Title"} />
    <div className=" max-w-full w-[392px] h-[390px] border-2 absolute top-[608px] flex justify-center items-center">
      <div className=" w-[350px] h-[332px] border-2"></div>
    </div>
    <div className=" mt-[135%] text-white">
    
    </div>
    </div>
  )
}

export default MobileHeader