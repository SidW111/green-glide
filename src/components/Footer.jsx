import { navLinks } from "../assets/constants"

const Footer = () => {
  return (
    <div className="bg-[#1E1E1E] text-white ">
        <div className=" text-xl flex items-center justify-between p-20">
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
      </div>
      </div>
    </div>
  )
}

export default Footer
