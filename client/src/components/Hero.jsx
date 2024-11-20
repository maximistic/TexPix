import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center my-20 px-4">

      <div className="text-neutral-700 inline-flex items-center gap-3 bg-gray-100 px-6 py-2 rounded-full border border-neutral-300 shadow-md hover:shadow-lg transition-shadow duration-200">
        <p className="font-medium">Try out our Text to Image Generator</p>
        <img src={assets.star_icon} alt="star icon" className="w-5 h-5" />
      </div>

      <h1 className="text-4xl sm:text-7xl font-extrabold max-w-[300px] sm:max-w-[590px] mx-auto mt-10">
        Turn Text into{" "}
        <span className="text-blue-600 underline decoration-2">pics</span>, in seconds!
      </h1>

      <p className="text-neutral-600 text-center max-w-xl mx-auto mt-5 text-sm sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, reprehenderit nam!
        Voluptatum nisi optio id reiciendis deserunt quod, sint ipsum, dignissimos, tenetur
        pariatur incidunt tempore in error impedit. Sequi, modi!
      </p>

      <button className="text-base sm:text-lg text-white bg-black mt-8 px-10 py-3 flex items-center gap-3 rounded-full hover:bg-neutral-800 transition-colors duration-200">
        Generate Images
        <img src={assets.star_group} alt="star group icon" className="h-5 sm:h-6" />
      </button>

      <div className="flex flex-wrap justify-center mt-16 gap-4">
        {Array(6)
          .fill("")
          .map((item, index) => (
            <img
              className="rounded-lg hover:scale-110 transition-transform duration-300 cursor-pointer w-16 sm:w-20"
              src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
              alt="sample"
              key={index}
            />
          ))}
      </div>

      <p className="mt-4 text-neutral-500 text-sm">Sample images from TEXPIX</p>
    </div>
  );
};

export default Hero;
