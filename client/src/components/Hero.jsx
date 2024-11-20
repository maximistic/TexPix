import { assets } from "../assets/assets"

const Hero = () => {
  return (
    <div className="felx flex-col justify-center items-center text-center my-20">
        <div className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500">
            <p>Try out our Text to Image Generator</p>
            <img src={assets.star_icon} alt="" />
        </div>

        <h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center"> Turn Text into <span className="text-blue-600">pics</span>, in seconds!</h1>

        <p className="text-center max-w-xl mx-auto mt-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, reprehenderit nam! Voluptatum nisi optio id reiciendis deserunt quod, sint ipsum, dignissimos, tenetur pariatur incidunt tempore in error impedit. Sequi, modi!</p>
    
        <button className="">
            Generate Images
            <img src={assets.star_group} alt="" />
        </button>
    </div>
  )
}

export default Hero