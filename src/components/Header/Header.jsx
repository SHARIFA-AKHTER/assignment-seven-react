// header section
const Header = ({ coinCount }) => {
    return (
        <div className="sticky top-0 z-50 bg-gray-200">
             <div className="flex flex-col md:flex-row md:justify-between  items-center
        py-8 space-y-4 md:space-y-0 ">
            {/* logo */}
            <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-14 rounded-full">
          <img className="lg:ml-32 "
            alt="Tailwind CSS Navbar component"
            src="https://i.ibb.co.com/ypV3qHk/logo.png" />
        </div>
      </div>
    </div>
            {/* menu start */}
            <div className="flex items-center space-x-6 lg:mr-32">
            <ul className="hidden  md:flex mr-12
             gap-12 font-medium text-gray-600 text-sm">
                <li><a href=""></a>Home</li>
                <li><a href=""></a>Fixture</li>
                <li><a href=""></a>Teams</li>
                <li><a href=""></a>Schedules</li>
            </ul>

            <button className="btn   space-x-2
              text-[#131313] font-semibold rounded flex bg-[#FFFFFF]
              items-center w-[180px] h-[50px] ml-12 border  ">
                 
                <span>{coinCount} Coin</span>  
                <img src="https://i.ibb.co.com/Vmsg3Bh/dollar-1.png" alt="coin image"
                className="w-4 h-4 shadow-md" />
                </button>
            </div>

      </div>
        </div>
    );
};

export default Header;