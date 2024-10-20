import shopimg from "../assets/images/shop1.png"
import shop2 from "../assets/images/shop2.png"
import shop3 from "../assets/images/shop3.jpg"
import shop4 from "../assets/images/shop4.png"
import golfball from "../assets/images/golfb.png"

const Shop = () => {
  return (
    <div  className="text-white bg-cover bg-[url('/src/assets/images/shopbg.jpg')] relative" >
    <h1 className="text-4xl p-20 tracking-[.15rem] max-sm:text-2xl max-sm:p-5">"Welcome to GreenGlide, where  passion meets precision
 on our pristine fairways.Nestled Australia,our club offers a
 premier golfing experience amidst breathtaking scenery.
 Whether you're a seasoned pro or a novice, enjoy our only 
 world-class facilities.Join us in celebrating the spirit of golf
 and community at GreenGlide."</h1>

 <h1 className="flex justify-center items-center
  text-8xl font-bold tracking-wider text-[#358600] pt-10 max-sm:text-5xl">Shop</h1>
  
  <div className=" p-12 flex justify-center items-center 
  gap-10 flex-wrap">
    <img src={shopimg} />
    <img src={shop2} />
    <img src={shop3} />
    <img src={shop4} />
  </div>
  <img className="absolute right-[10%] top-[25%] animate-spin max-sm:hidden" src={golfball} width={250} height={250}/>
    </div>
  )
}

export default Shop
