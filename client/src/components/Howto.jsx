import { stepsData } from "../assets/assets";

const Howto = () => {
  return (
    <div className="flex flex-col items-center justify-center my-32 px-4">
        
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center">How it works</h1>
      <p className="text-lg text-gray-600 mb-12 text-center">Transform words into stunning images</p>

      <div className="space-y-6 w-full max-w-3xl">
        {stepsData.map((item, index) => (
            <div
                key={index}
                className="flex items-center gap-6 p-6 px-8 bg-gradient-to-r from-white to-gray-50 shadow-lg border rounded-lg cursor-pointer hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300"
            >
        
            <img
              width={50}
              className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 p-2"
              src={item.icon}
              alt={`Step ${index + 1}`}
            />

            <div>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-500 text-sm sm:text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Howto;
