import { assets } from "../assets/assets";

const Desc = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Create Images</h1>
        <p className="text-gray-500 mb-8">Turn your thoughts into visuals</p>

        <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
            <img src={assets.sample_img_1} alt="" className="w-80 xl:w-96 rounded-lg "/>
            <div>
                <h2 className="text-3xl font-medium max-w-lg mb-4">Introducing an AI powered Text to image generator</h2>
                <p className="text-gray-600 mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi animi blanditiis quaerat enim dolorum quo dolorem exercitationem recusandae omnis labore sunt est, odio iusto optio numquam, fugiat eius beatae perferendis.</p>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus adipisci alias voluptate dicta exercitationem recusandae ipsum doloremque, esse corrupti modi quis explicabo repellendus! Perferendis voluptates similique, enim eius distinctio consequuntur?</p>
            </div>
        </div>
    </div>
  )
}

export default Desc