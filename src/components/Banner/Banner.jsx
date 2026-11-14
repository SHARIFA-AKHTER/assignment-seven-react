
const Banner = ({  handleClaimFreeCredit }) => {

    return (
        <div className=" bg-no-repeat bg-cover rounded-3xl w-full  sm:w-4/5 md:w-3/5 
        lg:w-[75%]  sm:h-60 md:h-[45rem] mb-10 mx-auto bg-[#000000] 
        h-screen m-4 p-4 bg-gradient-to-r from-blue-950 via-gray-950 to-yellow-950">
            
           
         <div className="w-9/12 mx-auto flex flex-col justify-center items-center
            text-center h-full space-y-6 py-4 ">
                <div className="w-[248px] h-[200px] bg-gray-200">
            <img 
                src="https://i.ibb.co/6mQPK5v/banner-main.png" 
                alt="Banner"
                className="w-full h-full object-cover rounded-lg"
            />
            </div>
                
            <h1 className="font-bold text-white md:text-[3.23rem]">
            Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="text-lg text-white font-normal">
            Beyond Boundaries Beyond Limits
            </p>

           
             <div className="flex gap-4 text-xl font-semibold">
            <button
             className="btn bg-[#E7FE29] rounded-xl border text-sm
             text-[#131313]  font-semibold  flex shadow-md
              items-center w-[150px] h-[52px] p-2 m-2  "
              onClick={ handleClaimFreeCredit}
              >
            Claim Free Credit
            </button>

            </div> 
            </div>
       </div>
      
    );
};

export default Banner;

