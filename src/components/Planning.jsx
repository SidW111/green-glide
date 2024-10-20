import planning from "../assets/images/planning.png"
import Button from "./Button"

const Planning = () => {
    return (
        <section className="flex flex-wrap justify-between bg-[#C4C4C4] ">
            <div className="m-10 p-[65px] pr-10">

            <div className="tracking-[.1rem]  pt-10 ">
            <h1 className="text-[#358600] text-5xl">Planning a trip</h1>
            <h1 className="text-[#358600] text-5xl">or tournament ?</h1>
           <div className="text-white text-2xl py-4 ">
             <Button/>
             </div>
            </div>
            <div className="text-5xl pt-[40%] tracking-[.1rem]">
            <h1>Contact </h1>
            <h1>@greenglide.com</h1>
            </div>
            </div>
            <div className="m-20 py-10">
                <img src={planning}/>
            </div>

        </section>
    )
}

export default Planning
