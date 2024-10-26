
const Footer = () => {
    return (
       
        <div className="bg-[#131313] absolute w-full flex flex-col 
        items-center justify-center pt-10">
        {/* Centered Image */}
        <div className="w-14 rounded-full flex justify-center mb-6">
            <img
                className="mx-auto"
                alt="Tailwind CSS Navbar component"
                src="https://i.ibb.co.com/NnQcJy6/logo-footer.png"
            />
        </div>
    
        {/* Footer Content */}
        <footer className="bg-base-200 text-base-content p-10 flex flex-col 
        sm:flex-row gap-6 text-white w-full justify-center sm:justify-between
         items-center">
    
    {/* About Us Section */}
    <nav className="flex flex-col items-center sm:items-start text-center sm:text-left mb-6 sm:mb-0">
        <h6 className="footer-title text-lg font-semibold mb-2">About Us</h6>
        <a className="link link-hover block">We are a passionate team</a>
        <a className="link link-hover block">dedicated to providing the best</a>
        <a className="link link-hover block">services to our customers.</a>
    </nav>

    {/* Quick Links Section */}
    <nav className="flex flex-col items-center sm:items-start text-center sm:text-left mb-6 sm:mb-0">
        <h6 className="footer-title text-lg font-semibold mb-2">Quick Links</h6>
        <a className="link link-hover block">Home</a>
        <a className="link link-hover block">Services</a>
        <a className="link link-hover block">About</a>
        <a className="link link-hover block">Contact</a>
    </nav>

    {/* Subscribe Section */}
    <nav className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <h6 className="footer-title text-lg font-semibold mb-2">Subscribe</h6>
        <p className="mb-4">Subscribe to our newsletter for the latest updates.</p>

        {/* Input and Button for Subscription */}
        <div className="form-control flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2">
            <input
                type="text"
                placeholder="Enter your email"
                className="input w-full sm:w-auto md:w-80 p-3 rounded-lg border-2 border-gray-300 
                           focus:border-green-500 bg-white text-gray-700 placeholder-gray-400 
                           shadow-md focus:outline-none transition duration-200 ease-in-out"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold 
               rounded-lg shadow-md hover:from-pink-600 hover:to-yellow-500 
               focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 
               transition duration-200 ease-in-out">
                Subscribe
            </button>
        </div>
    </nav>
</footer>
    
        <div className=" text-base-content border-base-300 border-t px-10 py-4 w-full">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
                <div className="text-sm md:text-base text-white">&copy; 2024 Your Company. All Rights Reserved.</div>
            </div>
        </div>
    </div>
    );
};

export default Footer; 