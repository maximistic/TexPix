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
    
        <button className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'>
            Generate Images
            <img className="h-6" src={assets.star_group} alt="" />
        </button>

        <div className="flex flex-wrap justify-center mt-16 gap-3">
          {Array(6).fill('').map((item, index)=>(
            <img className="rounded hover:scale-110 transition-all duration-300 cursor-pointer max-sm:w-10" 
            src={index % 2 == 0 ? assets.sample_img_1 : assets.sample_img_2} 
            alt="" key={index} width={70}
            />
          ))}
        </div>

        <p className="mt-2 text-neutral-600">Sample images from TEXPIX</p>
    </div>
  )
}

export default Hero