
const Subscribe = () => {
    return (

        <div
        className=" bg-cover bg-no-repeat rounded-3xl flex flex-col
         items-center justify-center mx-auto 
          w-11/12 lg:w-[1340px] h-auto md:h-[35.5rem] lg:h-[336px] 
          p-8 lg:p-12 space-y-6 text-center shadow-lg
          transition transform hover:scale-105 
          hover:translate-y-1 duration-300 ease-in-out mb-16"
        style={{
            backgroundImage: 'url(https://i.ibb.co/tDfKFtb/bg-shadow.png)',
        }}
    >
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Subscribe to our Newsletter
        </h1>
        <p className="text-base md:text-lg lg:text-xl">
            Get the latest updates and news right in your inbox!
        </p>
    
        <div className="form-control flex flex-col md:flex-row
         items-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
            <input
                type="text"
                placeholder="Enter your email"
                className="input w-full md:w-80 p-3 rounded-lg border-2 border-gray-300 focus:border-green-500 
                           bg-white text-gray-700 placeholder-gray-400 shadow-md focus:outline-none transition 
                           duration-200 ease-in-out"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold 
                              rounded-lg shadow-md hover:from-pink-600 hover:to-yellow-500 
                              focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 
                              transition duration-200 ease-in-out">
                Subscribe
            </button>
        </div>
    </div>

           
    );
};

export default Subscribe;