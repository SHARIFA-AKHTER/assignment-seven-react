
const AvailablePlayers = () => {
    return (
       <>

    <div className="flex flex-col md:flex-row justify-between items-center
     bg-white p-6 shadow-md rounded-md mb-6">
           <div className="text-left">
             <h3 className="flex lg:justify-start lg:items-start  lg:ml-24
         m-2 p-4 text-lg md:text-xl lg:text-2xl font-semibold "
             >Available Players</h3>
           </div>

        <div className="flex justify-end items-end mt-4 md:mt-0 gap-4 lg:mr-20">
        <button  className="btn bg-[#E7FE29] rounded border text-sm text-[#131313]
         font-semibold shadow-md items-center w-full 
         sm:w-[140px] h-[52px] p-4 ">Available</button>
          <button className="btn text-[#131313] font-semibold rounded bg-[#FFFFFF] 
          items-center w-full sm:w-[140px] h-[52px] p-4 border 
          shadow-md">Selected</button>

        </div> 
    </div>
           
            </>
    );
};

export default AvailablePlayers;