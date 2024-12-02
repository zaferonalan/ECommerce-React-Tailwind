import banner from "../assets/HeroBanner.jpg";

const HeroBanner = () => {
  return (
    <div className="bg-gray-100 lg:pt-24 pt-16">
        <div className="relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-top h-[550px] md:h-[600px]" style={{backgroundImage:`url(${banner})`}}>
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center md:rounded-2xl">
                <div className="text-center text-white px-4">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Discover Your Style</h1>
                    <p className="text-lg md:text-xl mb-6 ">Shop the latest trends and find your perfect look</p>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300">Shop Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner