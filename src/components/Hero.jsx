import heero from "../assets/images/hero.mp4"
import golfball from "../assets/images/golfball.png" 
const Hero = () => {
  return (
    <main className="bg-[#C4C4C4] relative">
      <h1 className="flex justify-center 
      items-center text-gray-500 
      text-3xl">Ready to have</h1>
      <h1 className=" flex justify-center 
      text-7xl font-bold max-sm:text-center">Oustanding golf
     </h1>
     <h1 className="flex justify-center 
      text-7xl font-bold">
        experience
      </h1>
     
      <div className="py-1 flex justify-center items-center">
      <video className="w-[1300px] h-8/12 rounded-3xl"
      src={heero} autoPlay loop muted>
      </video>
      </div>
      <img className="absolute left-[15%] top-[9%] h-[25%] max-sm:hidden" src={golfball}/>
    </main>
  )
}

export default Hero
