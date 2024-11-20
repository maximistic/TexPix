import { assets } from "../assets/assets"


const Generatebtn = () => {
  return (
    <div className="pb-16 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16">Experience the magic. Click the button!</h1>

        <button className="inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white hover:scale-105 transition-all duration-500 m-auto ">Try it out!
            <img src={assets.star_group} alt="" className="h-6"/>
        </button>
    </div>
  )
}

export default Generatebtn