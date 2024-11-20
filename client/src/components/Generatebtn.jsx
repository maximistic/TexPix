import { assets } from "../assets/assets"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { useNavigate } from "react-router-dom"

const Generatebtn = () => {

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
    <div className="pb-16 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16">Experience the magic. Click the button!</h1>

        <button onClick={onClickHandler} className="inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white hover:scale-105 transition-all duration-500 m-auto ">Try it out!
            <img src={assets.star_group} alt="" className="h-6"/>
        </button>
    </div>
  )
}

export default Generatebtn