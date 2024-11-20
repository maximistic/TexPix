import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const {user, setShowLogin} = useContext(AppContext);
  const navigate = useNavigate()
  const onClickHandler = () => {
    if(user){
      navigate('/generator')
    }
    else{
      setShowLogin(true)
    }
  }
  
  return (
    <motion.div
      className="flex flex-col justify-center items-center text-center my-20 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.div
        className="text-neutral-700 inline-flex items-center gap-3 bg-gray-100 px-6 py-2 rounded-full border border-neutral-300 shadow-md hover:shadow-lg transition-shadow duration-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
      >
        <p className="font-medium">Try out our Text to Image Generator</p>
        <img src={assets.star_icon} alt="star icon" className="w-5 h-5" />
      </motion.div>

      <motion.h1
        className="text-4xl sm:text-7xl font-extrabold max-w-[300px] sm:max-w-[590px] mx-auto mt-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
      >
        Turn Text into{" "}
        <span className="text-blue-600 underline decoration-2">pics</span>, in seconds!
      </motion.h1>

      <motion.p
        className="text-neutral-600 text-center max-w-xl mx-auto mt-5 text-sm sm:text-base"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, reprehenderit nam!
        Voluptatum nisi optio id reiciendis deserunt quod, sint ipsum, dignissimos, tenetur
        pariatur incidunt tempore in error impedit. Sequi, modi!
      </motion.p>

      <motion.button onClick={onClickHandler}
        className="text-base sm:text-lg text-white bg-black mt-8 px-10 py-3 flex items-center gap-3 rounded-full hover:bg-neutral-800 transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      >
        Generate Images
        <img src={assets.star_group} alt="star group icon" className="h-5 sm:h-6" />
      </motion.button>

      <motion.div
        className="flex flex-wrap justify-center mt-16 gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 1.2 },
          },
        }}
      >
        {Array(6)
          .fill("")
          .map((_, index) => (
            <motion.img
              className="rounded-lg hover:scale-110 transition-transform duration-200 cursor-pointer w-16 sm:w-20"
              src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
              alt="sample"
              key={index}
              whileHover={{ rotate: 2, scale: 1.5 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            />
          ))}
      </motion.div>

      <motion.p
        className="mt-4 text-neutral-500 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1, ease: "easeOut" }}
      >
        Sample images from TEXPIX
      </motion.p>
    </motion.div>
  );
};

export default Hero;
