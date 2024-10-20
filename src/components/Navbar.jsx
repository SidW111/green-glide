import { navLinks } from "../assets/constants"
import Button from "./Button"
import hammy from "../assets/icons/hamburger.svg"

const Navbar = () => {
  return (
    <nav className="bg-[#C4C4C4]">
        <div className="text-xl flex items-center justify-between p-8">
      <div className="text-3xl flex ">
        <h1>Green</h1>
        <h1 className="text-green-900">Glide</h1>
      </div>
      <div className="flex gap-16 items-center 
                    justify-center max-lg:hidden">
        <ul className="flex gap-16 items-center justify-center">
            {navLinks.map((item) => (
                <li key={item.label}>
                    <a href={item.href} className="font-montserrat
                    leading-normal text-lg text-slate-gray"></a>
                    {item.label}
                </li>
            ))}
        </ul>
        <Button/>
        <div className='hidden max-lg:block'>
            <img src={hammy} alt='Hamburger'
            height={25}
            width={25}/>
           </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar