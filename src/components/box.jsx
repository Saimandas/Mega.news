

const Box = ({tittle,name}) => {
  return (
    <>
   <div className=" border-2 w-full max-w-[358px] h-[445px] absolute top-[123px] flex justify-center p-1 ">
      <div className=" w-full border- h-[50px] flex justify-between p-1">
        <h1 className=" text-white text-[20px] font-medium leading-[23.44px]  ">{tittle}</h1>
        <div className=" w-[100px] h-full maxh-[40px] flex gap-[20px] ">
          <button className=" border-2 w-[40px] h-[40px] rounded-[12px]"></button>
          <button className=" border-2 w-[40px] h-[40px] rounded-[12px]"></button>
        </div>
      </div>
       
    <div className=" max-w-[358px] w-[95%]  h-[358px] border-2  p-[10px]  rounded-[12px] mt-[18%] absolute flex flex-col ">
     <div className=" w-full max-w-[338px] border-2 h-[186px] rounded-md">
     </div>
     <h1 className=" border-2 w-full h-[52px] pl-[6px] pr-[16px] pt-[16px] pb-[16px] text-white font-medium text-[16px]">{name}</h1> 
     <p className=" w-full h-[56px] gap-[8px] p-[0px,16px,16px,6px] border-2   "></p>
     <div className=" min-w-[318px] w-[80%]  h-[72px] border-2 rounded-[12px] pt-[13px] pr-[16px] pb-[13px] pl-[16px] flex gap-[10px]">
      <div className=" w-[286px] h-[44px] border-2 flex gap-[10px] rounded-[12px] bg-red-50 ">
      </div>
      <button className=" w-[20px] h-[20px] bg-blue-300 self-center"></button>
     </div>
    </div>    
    </div> 
    </>
  )
}

export default Box